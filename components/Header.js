import next from "next";

export default function Header({ title }) {
  return (
    <div class="flex flex-col mb-6 justify-center items-center">
      <h1 class="text-4xl text-white font-bold text-center">{title}</h1>
    </div>
  );
}
