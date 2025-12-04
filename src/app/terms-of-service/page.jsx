export default function TermsOfService() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-12">
          These Terms of Service (“Terms”) govern your use of
          vectorengineeringuae.com and all services provided by
          <span className="font-semibold"> Vector Engineering UAE </span>. By
          accessing our website or engaging with our services, you agree to be
          bound by these Terms.
        </p>

        {/* Section */}
        <div className="space-y-12">
          {/* 1. Services */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              1. Services Provided
            </h2>
            <p className="text-gray-600 mb-4">
              Vector Engineering UAE offers specialized inspection, testing, and
              engineering support services, including but not limited to:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>PMI Testing</li>
              <li>Welding & Coating Inspection</li>
              <li>Safety Audits & Inspections</li>
              <li>E&amp;I Inspection & Pre-Commissioning / Commissioning</li>
              <li>FAT & Maintenance</li>
              <li>Site Surveys & MEP</li>
            </ul>
            <p className="text-gray-600 mt-4">
              All services are carried out by qualified professionals and follow
              industry best practices and applicable standards.
            </p>
          </div>

          {/* 2. Client Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2. Client Responsibilities
            </h2>
            <p className="text-gray-600">
              Clients must provide accurate information, safe access to
              facilities, and any required documentation before work begins.
              Delays caused by the client may result in additional charges.
            </p>
          </div>

          {/* 3. Reports & Deliverables */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              3. Reports and Deliverables
            </h2>
            <p className="text-gray-600">
              Inspection reports, certifications, and technical documents
              provided by Vector Engineering UAE are for the exclusive use of
              the client and should not be altered or misrepresented.
              Unauthorized distribution may violate our intellectual property
              rights.
            </p>
          </div>

          {/* 4. Payment Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              4. Payment Terms
            </h2>
            <p className="text-gray-600">
              Payments must be made according to the terms stated in the
              quotation or invoice. Late payments may incur additional fees.
              Services may be withheld until outstanding payments are cleared.
            </p>
          </div>

          {/* 5. Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              While we conduct all inspections with professional care, Vector
              Engineering UAE is not responsible for damages arising from misuse
              of inspection results or failure of materials outside the
              inspected scope.
            </p>
          </div>

          {/* 6. Cancellations */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              6. Cancellations & Rescheduling
            </h2>
            <p className="text-gray-600">
              Cancellations must be made at least 24 hours in advance.
              Short-notice cancellations may be subject to charges related to
              mobilization, transportation, or manpower allocation.
            </p>
          </div>

          {/* 7. Website Use */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              7. Website Usage
            </h2>
            <p className="text-gray-600">
              All content on vectorengineeringuae.com is owned by Vector
              Engineering UAE. Users may not copy, reproduce, or distribute
              website materials without written permission.
            </p>
          </div>

          {/* 8. Privacy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              8. Privacy Policy
            </h2>
            <p className="text-gray-600">
              Client information collected through forms or direct communication
              is kept confidential and used only for service delivery purposes.
            </p>
          </div>

          {/* 9. Changes to Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              9. Changes to These Terms
            </h2>
            <p className="text-gray-600">
              Vector Engineering UAE reserves the right to update these Terms at
              any time. Continued use of our website or services means you
              accept the updated Terms.
            </p>
          </div>

          {/* 10. Contact */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              10. Contact Us
            </h2>
            <p className="text-gray-600">
              For questions regarding these Terms of Service, contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Email:</strong> info@vectorengineeringuae.com
              <br />
              <strong>Phone:</strong> +971 54 494 2878
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
