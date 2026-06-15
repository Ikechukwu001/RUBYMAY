"use client";

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const [form, setForm] = useState({
    name: "",
    title: "",
    message: "",
    rating: 5,
  });

  const placeholderReviews = useMemo(
    () => [
      { id: "ph-2024-01", name: "Chloe M.", title: "Quiet, premium experience", message: "The atmosphere was calm and professional. I left feeling lighter and well-rested.", rating: 5, created_at: "2024-02-14T10:12:00.000Z" },
      { id: "ph-2024-02", name: "Jordan K.", title: "Great for shoulder tension", message: "Excellent pressure control and very respectful communication. My shoulders felt noticeably better.", rating: 5, created_at: "2024-03-28T16:40:00.000Z" },
      { id: "ph-2024-03", name: "Priya S.", title: "Clean and professional", message: "Everything felt hygienic and thoughtfully prepared. A genuinely relaxing, clinical-standard setup.", rating: 5, created_at: "2024-05-03T12:05:00.000Z" },
      { id: "ph-2024-04", name: "Evan R.", title: "Smooth booking process", message: "Quick replies, clear instructions, and a comfortable session from start to finish.", rating: 5, created_at: "2024-06-18T09:50:00.000Z" },
      { id: "ph-2024-05", name: "Sofia L.", title: "Perfect pacing", message: "The pacing was steady and calming. I felt relaxed without feeling rushed at any point.", rating: 5, created_at: "2024-07-22T14:11:00.000Z" },
      { id: "ph-2024-06", name: "Marcus T.", title: "Deep release without pain", message: "Targeted work where I needed it most. Strong technique but still comfortable.", rating: 5, created_at: "2024-08-09T18:25:00.000Z" },
      { id: "ph-2024-07", name: "Amina O.", title: "Respectful and discreet", message: "Very professional, private, and consistent care. I felt safe and comfortable.", rating: 5, created_at: "2024-09-18T11:30:00.000Z" },
      { id: "ph-2024-08", name: "Nathan B.", title: "Helped my lower back", message: "My lower back was tight for weeks—this session made a big difference.", rating: 5, created_at: "2024-10-27T13:42:00.000Z" },
      { id: "ph-2024-09", name: "Grace D.", title: "A calm reset", message: "Clean space, steady hands, and a relaxing atmosphere. I slept better afterwards.", rating: 4, created_at: "2024-11-12T19:05:00.000Z" },
      { id: "ph-2024-10", name: "Leo P.", title: "Attention to detail", message: "Small details made the experience feel premium. Great technique and professionalism.", rating: 5, created_at: "2024-12-05T08:18:00.000Z" },
      { id: "ph-2025-01", name: "Mia K.", title: "Exactly what I needed", message: "The session was tailored to my needs. I felt refreshed and calm afterwards.", rating: 5, created_at: "2025-01-22T12:31:00.000Z" },
      { id: "ph-2025-02", name: "Caleb S.", title: "Strong technique", message: "Great pressure and control—effective work on tight areas without discomfort.", rating: 5, created_at: "2025-02-16T17:10:00.000Z" },
      { id: "ph-2025-03", name: "Hannah V.", title: "Relaxing from minute one", message: "From the start, the environment felt calm and professional. Highly recommend.", rating: 5, created_at: "2025-03-09T10:05:00.000Z" },
      { id: "ph-2025-04", name: "Owen J.", title: "Worth it", message: "Great session and great communication. I felt balanced and lighter afterwards.", rating: 5, created_at: "2025-04-11T15:44:00.000Z" },
      { id: "ph-2025-05", name: "Zara N.", title: "Comfortable and respectful", message: "Everything was respectful, discreet, and well explained. I felt comfortable throughout.", rating: 5, created_at: "2025-06-09T14:11:00.000Z" },
      { id: "ph-2025-06", name: "Dylan C.", title: "Great for stress", message: "I came in stressed and left calm. The pacing and pressure were perfect.", rating: 4, created_at: "2025-07-26T09:22:00.000Z" },
      { id: "ph-2025-07", name: "Fatima A.", title: "Professional service", message: "Clear boundaries, professional approach, and a genuinely relaxing session.", rating: 5, created_at: "2025-09-03T18:02:00.000Z" },
      { id: "ph-2025-08", name: "Ryan W.", title: "Clean setup", message: "Very clean, organized, and calm. The experience felt premium and intentional.", rating: 5, created_at: "2025-10-14T12:50:00.000Z" },
      { id: "ph-2025-09", name: "Ivy Q.", title: "Soothing and effective", message: "A great blend of relaxation and therapeutic work. I booked again the same week.", rating: 5, created_at: "2025-11-05T09:50:00.000Z" },
      { id: "ph-2026-01", name: "Ava D.", title: "A refined wellness reset", message: "The vibe was calm and premium. I felt refreshed and well cared for.", rating: 5, created_at: "2026-01-08T11:30:00.000Z" },
    ],
    []
  );

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    if (!popup.open) return;

    const timer = setTimeout(() => {
      setPopup((prev) => ({ ...prev, open: false }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [popup.open]);

  function normalizeReview(r) {
    let createdAt = new Date().toISOString();

    if (typeof r.created_at === "string") {
      createdAt = r.created_at;
    } else if (r.created_at?.toDate) {
      createdAt = r.created_at.toDate().toISOString();
    }

    return {
      id: r.id,
      name: r.name || "Anonymous",
      title: r.title || "Client Review",
      message: r.message || "",
      rating: Number(r.rating || 5),
      created_at: createdAt,
      __source: r.__source || "db",
    };
  }

  function mergeAndSortReviews(dbReviews = [], placeholders = []) {
    const map = new Map();

    placeholders
      .map((r) => normalizeReview({ ...r, __source: "placeholder" }))
      .forEach((r) => map.set(r.id, r));

    dbReviews
      .map((r) => normalizeReview({ ...r, __source: "db" }))
      .forEach((r) => map.set(r.id, r));

    return Array.from(map.values()).sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  async function fetchReviews() {
    try {
      setLoading(true);

      const reviewsRef = collection(db, "reviews");
      const q = query(reviewsRef, orderBy("created_at", "desc"));
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReviews(mergeAndSortReviews(data, placeholderReviews));
    } catch (error) {
      console.error("Error loading reviews:", error);
      setReviews(mergeAndSortReviews([], placeholderReviews));
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        name: form.name?.trim() || "Anonymous",
        title: form.title.trim(),
        message: form.message.trim(),
        rating: Number(form.rating),
        created_at: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "reviews"), payload);

      const optimisticReview = {
        id: docRef.id,
        ...payload,
        created_at: new Date().toISOString(),
      };

      setReviews((prev) =>
        mergeAndSortReviews(
          [optimisticReview, ...prev.filter((r) => r.__source === "db")],
          placeholderReviews
        )
      );

      setForm({ name: "", title: "", message: "", rating: 5 });

      setPopup({
        open: true,
        type: "success",
        message: "Thank you for your review! ✨",
      });
    } catch (error) {
      console.error("Error submitting review:", error);

      setPopup({
        open: true,
        type: "error",
        message: "Failed to submit review. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#fffafc] py-20 md:py-28">
        <div className="pointer-events-none absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#ffe1ea]/70 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-[#fff0f6]/80 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e88aa3]">
              Reviews
            </p>

            <h1 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-[#2b1f24] md:text-5xl">
              Client reviews
            </h1>

            <p className="mt-6 max-w-2xl leading-8 text-[#7b5d67]">
              Honest experiences shared by clients who took time to relax,
              reset, and restore.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {loading ? (
              <div className="rounded-[1.75rem] border border-[#f3d9df] bg-white/75 p-8 text-center shadow-[0_14px_38px_rgba(232,138,163,0.08)]">
                <p className="text-[#a47b86]">Loading reviews…</p>
              </div>
            ) : null}

            {!loading && reviews.length === 0 ? (
              <div className="rounded-[1.75rem] border border-[#f3d9df] bg-white/75 p-8 text-center shadow-[0_14px_38px_rgba(232,138,163,0.08)]">
                <p className="text-[#a47b86]">
                  No reviews yet. Be the first to share your experience.
                </p>
              </div>
            ) : (
              !loading &&
              reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
            )}
          </div>

          <div className="mt-16 max-w-3xl">
            <div className="rounded-[1.75rem] border border-[#f3d9df] bg-white/75 p-8 shadow-[0_18px_50px_rgba(232,138,163,0.10)] backdrop-blur">
              <h2 className="font-serif text-2xl text-[#2b1f24] md:text-3xl">
                Leave a review
              </h2>

              <p className="mt-3 text-sm text-[#a47b86]">
                Your feedback helps others choose confidently.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-2xl border border-[#f3d9df] bg-[#fffafd] px-4 py-3 text-[#2b1f24] outline-none transition placeholder:text-[#a47b86] focus:border-[#e88aa3] focus:bg-white"
                />

                <input
                  type="text"
                  placeholder="Review title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  className="w-full rounded-2xl border border-[#f3d9df] bg-[#fffafd] px-4 py-3 text-[#2b1f24] outline-none transition placeholder:text-[#a47b86] focus:border-[#e88aa3] focus:bg-white"
                />

                <textarea
                  rows={6}
                  placeholder="Share your experience"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  className="w-full resize-none rounded-2xl border border-[#f3d9df] bg-[#fffafd] px-4 py-3 text-[#2b1f24] outline-none transition placeholder:text-[#a47b86] focus:border-[#e88aa3] focus:bg-white"
                />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#a47b86]">Rating</span>

                    <select
                      value={form.rating}
                      onChange={(e) =>
                        setForm({ ...form, rating: Number(e.target.value) })
                      }
                      className="rounded-2xl border border-[#f3d9df] bg-[#fffafd] px-3 py-2 text-[#2b1f24] outline-none focus:border-[#e88aa3]"
                    >
                      {[5, 4, 3, 2, 1].map((r) => (
                        <option key={r} value={r}>
                          {r} Star{r > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-fit items-center justify-center rounded-full bg-[#e88aa3] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(232,138,163,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d96f8d] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? "Submitting…" : "Submit review"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {popup.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#2b1f24]/40 backdrop-blur-md"
            onClick={() => setPopup((prev) => ({ ...prev, open: false }))}
          />

          <div className="relative w-full max-w-md rounded-[1.75rem] border border-[#f3d9df] bg-white p-7 shadow-[0_30px_80px_rgba(43,31,36,0.20)]">
            <div
              className={`h-1 w-full rounded-full ${
                popup.type === "success" ? "bg-[#e88aa3]" : "bg-red-400"
              }`}
            />

            <div className="mt-6 text-center">
              <h3 className="font-serif text-2xl text-[#2b1f24]">
                {popup.type === "success"
                  ? "Review submitted"
                  : "Something went wrong"}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#7b5d67]">
                {popup.message}
              </p>
            </div>

            <button
              onClick={() => setPopup((prev) => ({ ...prev, open: false }))}
              className="mt-6 w-full rounded-full bg-[#e88aa3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d96f8d]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="rounded-[1.75rem] border border-[#f3d9df] bg-white/75 p-7 shadow-[0_14px_38px_rgba(232,138,163,0.08)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white">
      <div className="mb-4 flex items-center justify-between gap-4">
        <StarRating rating={review.rating} />

        <time className="text-xs uppercase tracking-widest text-[#a47b86]">
          {new Date(review.created_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>

      <h3 className="mb-3 font-serif text-xl tracking-[-0.03em] text-[#2b1f24] md:text-2xl">
        {review.title}
      </h3>

      <p className="leading-8 text-[#7b5d67]">{review.message}</p>

      <p className="mt-4 text-sm text-[#a47b86]">
        — {review.name || "Anonymous"}
      </p>
    </article>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= rating ? "text-[#e88aa3]" : "text-[#f3d9df]"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}