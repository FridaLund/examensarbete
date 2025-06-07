import FeatherIcon from "feather-icons-react";
import { useCallback, useState } from "react";

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} className={props.className}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="font-medium">
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={`outline focus:outline-2 rounded-md px-3 py-2 ${props.validName ? "outline-blue-300" : "outline-red-500"}`}
            />
            {!props.validName && (
              <span class="mt-2 text-sm text-red-500">Please enter a name</span>
            )}
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="mail" className="font-medium">
              Mail
            </label>
            <input
              type="text"
              name="mail"
              id="mail"
              className={`outline focus:outline-2 rounded-md px-3 py-2 ${props.validEmail ? "outline-blue-300" : "outline-red-500"}`}
            />
            {!props.validEmail && (
              <span class="mt-2 text-sm text-red-500">
                Please enter an email address
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="feedback" className="font-medium">
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            className={`outline focus:outline-2 rounded-md px-3 py-2 resize-none h-[150px] ${props.validFeedback ? "outline-blue-300" : "outline-red-500"}`}
          />
          {!props.validFeedback && (
            <span class="mt-2 text-sm text-red-500">Please enter feedback</span>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-200 hover:bg-blue-300 text-blue-950 duration-300 transition-colors font-medium py-3 px-8 rounded-xl flex items-center gap-1 cursor-pointer"
          >
            Send
            <FeatherIcon className="size-5" icon="send" />
          </button>
        </div>
      </div>
    </form>
  );
}

function Feedback() {
  const [sender, setSender] = useState(undefined);
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validFeedback, setValidFeedback] = useState(true);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const mail = formData.get("mail");
    console.log(`Mail '${mail}'`);
    const feedback = formData.get("feedback");
    if (!!name && !!mail && !!feedback) {
      setSender(name);
    }
    setValidName(!!name);
    setValidEmail(!!mail);
    console.log(!!mail);
    setValidFeedback(!!feedback);
  }, []);
  console.log(validEmail);
  return (
    <div className="bg-blue-200/50 rounded-4xl p-6 max-w-2xl mx-auto m-8">
      <h2>{sender ? `Thanks ${sender} for your feedback!` : "Feedback"}</h2>
      <Form
        className={`transition-transform ${sender ? "scale-0 h-0" : "scale-100"}`}
        validEmail={validEmail}
        validFeedback={validFeedback}
        validName={validName}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Feedback;
