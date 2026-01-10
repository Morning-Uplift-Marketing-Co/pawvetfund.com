import { useEffect } from "react";

const Apply = () => {
  useEffect(() => {
    (window as any)._lg_form_init_ = { aid: "14881", template: "fresh" };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://apikeep.com/form/applicationInit.js";
    document.body.appendChild(script);

    return () => {
      delete (window as any)._lg_form_init_;
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="_lg_form_"></div>;
};

export default Apply;
