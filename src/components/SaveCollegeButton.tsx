"use client";

type Props = {
  collegeId: string;
};

export default function SaveCollegeButton({
  collegeId,
}: Props) {
  async function saveCollege() {
    const response =
      await fetch(
        "/api/save-college",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            collegeId,
          }),
        }
      );

    if (response.ok) {
      alert(
        "College saved successfully"
      );
    } else {
      alert(
        "Please login first"
      );
    }
  }

  return (
    <button
      onClick={saveCollege}
      className="mt-8 bg-black text-white px-6 py-4 rounded-xl"
    >
      ❤️ Save College
    </button>
  );
}