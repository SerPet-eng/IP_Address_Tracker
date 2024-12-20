import Form from './formContents/Form';
import Result from './formContents/Result';

export default function FormHandler() {
  return (
    <div className="form-handler">
      <p className="form-handler-title">IP Address Tracker</p>
      <Form />
      <Result />
    </div>
  );
}
