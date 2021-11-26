import next from "next";

export default function BlogCard({ image, title, description, link }) {
  return (
    <div class="max-w-lg mx-auto">
      <div class="bg-purple-medium p-5 shadow-md rounded-large max-w-md mb-5">
        <img class="rounded-lg" src={image} />
        <div>
          <div class="flex flex-shrink-0  text-sm mt-3 items-center pr-2 ">
            <div class="text-white px-2 py-1 rounded-md border-2 border-yellow">
              Web 3.0
            </div>
            <div class="text-white ml-3 px-2 py-1 rounded-md border-2 border-green-light">
              Crypto
            </div>
          </div>
          <h5 class="text-white font-bold text-2xl mt-2 mb-2">{title}</h5>
          <p class="text-md text-white mb-3">{description}</p>
        </div>
      </div>
    </div>
  );
}
