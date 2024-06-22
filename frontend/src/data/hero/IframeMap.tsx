import { FC } from "react";

const IframeMap: FC = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.821665914685!2d-114.0807365!3d51.0932986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371658521e49643%3A0xe758ea3bb43192eb!2s419%20Northmount%20Dr%20NW%2C%20Calgary%2C%20AB%20T2K%203H7!5e0!3m2!1sen!2sca!4v1716651064489!5m2!1sen!2sca"
        width="100%"
        height="100%"
        className="rounded-lg shadow-lg border-4 border-white-0"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default IframeMap;
