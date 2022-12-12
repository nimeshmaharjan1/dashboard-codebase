import { useTheme } from 'next-themes';
import Button from 'react-bootstrap/Button';

//Import module scss as styles
// import styles from './*.module.scss';

const BtnLogin = () => {
  const { theme, setTheme } = useTheme();
  //You can concatenate or just give one styles such as shown below
  return (
    <>
      <div
        className="form-check form-switch mode-switch me-3 me-lg-4 ms-auto mb-0 d-inline-block"
        data-bs-toggle="mode"
      >
        <input
          className="form-check-input"
          onChange={(e) => {
            console.log(e.target.checked);
            if (e.target.checked) {
              setTheme('darken');
            } else {
              setTheme('light');
            }
          }}
          type="checkbox"
          id="theme-mode"
        />
        {/* <label className="form-check-label" htmlFor="theme-mode">
          <i className="sun"></i>
        </label> */}
        {/* <label className="form-check-label " htmlFor="theme-mode">
          <i className="moon"></i>
        </label> */}
      </div>
      <div className="text-end">
        <Button variant="primary">Login</Button>
        {/* <button type="button" className="btn btn-warning">
          Sign-up
        </button> */}
      </div>
    </>
  );
};

export default BtnLogin;
