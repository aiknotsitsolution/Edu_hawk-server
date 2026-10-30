import React from "react";

const CookiesPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-8 text-center">
          <h1 className="text-4xl font-bold mb-3">Cookies Policy</h1>
          <p className="text-blue-100 text-lg">Last Updated: {lastUpdated}</p>
        </div>

        <div className="p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What are Cookies?
            </h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device when you
              visit a website. They help websites remember your preferences,
              improve performance, and provide a better browsing experience.
            </p>
            <p>
              At <span className="font-semibold text-indigo-600">EduHawk Worldwide</span>,
              we use cookies to make our website easier to use and more relevant to
              your needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Types of Cookies We Use
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold text-gray-800">Essential Cookies:</span>{" "}
                These are necessary for the website to work properly, including
                navigation, security, and accessibility.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Analytical Cookies:</span>{" "}
                These help us understand how visitors use our website so we can
                improve content, layout, and user experience.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Functional Cookies:</span>{" "}
                These remember your preferences and settings such as language or
                region-related choices.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Marketing Cookies:</span>{" "}
                These may be used to understand the effectiveness of campaigns and
                provide more relevant promotional content.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why We Use Cookies
            </h2>
            <p className="mb-4">We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve website performance and reliability</li>
              <li>Remember user preferences and settings</li>
              <li>Analyze user behavior and improve our services</li>
              <li>Provide more relevant search and content recommendations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Choices
            </h2>
            <p className="mb-4">
              You can manage cookies through your browser settings. Most browsers
              allow you to accept, reject, or delete cookies. However, disabling
              certain cookies may affect the functionality of some parts of our
              website.
            </p>
            <p>
              You may also use your browser’s privacy settings to block third-party
              cookies or clear stored cookies at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Third-Party Cookies
            </h2>
            <p>
              Some third-party services used on our website may also place cookies to
              help us measure performance, improve services, or manage analytics. We
              do not sell your personal data, and third-party cookies are governed by
              the respective provider’s privacy settings and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Consent and Updates
            </h2>
            <p>
              By continuing to use our website, you consent to the use of cookies in
              accordance with this policy. We may update this Cookies Policy from time
              to time to reflect changes in technology, law, or our services.
            </p>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="mb-4 text-gray-600">
              If you have any questions regarding this Cookies Policy, please contact us:
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+919630736070" className="text-blue-600 hover:underline">
                  +91 96307 36070
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:admin@eduhawk.in" className="text-blue-600 hover:underline">
                  admin@eduhawk.in
                </a>
              </p>
              <p>
                <span className="font-medium">Website:</span>{" "}
                <a href="https://eduhawk.in" className="text-blue-600 hover:underline">
                  eduhawk.in
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
