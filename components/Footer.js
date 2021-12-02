import next from "next";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMediumCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Footer({}) {
  return (
    <div class="footer">
      <div class="container ">
        <div class="footer-contents flex">
          <div class="footer-logo-section col-4 ">
            <div class="footer-logo text-4xl text-white">pioneers</div>
            <div class="copyright-section text-white py-20">
              Copyright @2021 pioneers <br />
              All rights reserved.
            </div>
            <div class="social-links text-white flex list-none justify-between w-2/4">
              <li class="text-3xl">
                <AiFillInstagram />
              </li>
              <li class="text-3xl">
                <AiFillMediumCircle />
              </li>
              <li class="text-3xl">
                <AiFillGithub />
              </li>
              <li class="text-3xl">
                <AiFillYoutube />
              </li>
            </div>
          </div>
          <div class="company-details-section col-4 flex justify-center">
            <div class="company-details text-white col-6 items-center flex-col ">
              <h2 class="pb-6 text-2xl">Company</h2>
              <ul>
                <li class="py-3">About Us</li>
                <li class="py-3">Blog</li>
                <li class="py-3">Contact us</li>
                <li class="py-3">Pricing </li>
                <li class="py-3">Testimonial</li>
              </ul>
            </div>
            <div class="support-us text-white col-6 items-center flex-col">
              <h2 class="pb-6 text-2xl">Support</h2>
              <ul>
                <li class="py-3">Health center</li>
                <li class="py-3">Terms of services</li>
                <li class="py-3">Legal</li>
                <li class="py-3">Privacy Policy</li>
                <li class="py-3">Status</li>
              </ul>
            </div>
          </div>
          <div class="email-subscribe col-4 ">
            <h2 class="text-white text-2xl pb-10">Stay up to date</h2>
            <form>
              <div class="input text-white flex bg-pink">
                <input type="text" placeholder="your email address" />
                <RiSendPlaneFill />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
