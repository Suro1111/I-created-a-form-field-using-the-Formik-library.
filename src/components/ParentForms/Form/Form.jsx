import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateSchem } from "../../schema.js";

import style from "./Form.module.css";

export function FormBlock({ globalData }) {  
  return (
    <>
      <h1>facebook</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          mont: "",
          day: "",
          year: "",
          gender: "",
          email: "",
          password: "",
        }}
        validationSchema={validateSchem}
        onSubmit={(values) => console.log(values)}
      >
        <Form className={style.form}>
          <h2>Create a new account</h2>
          <p>It's quick and easy.</p>
          <br />
          <hr />
          <div className={style.input}>
            <Field
              name="firstName"
              placeholder="First Name"
              type="text"
              className={style.inp}
            />
            <ErrorMessage name="firstName" component={"p"} className="error" />
          </div>
          <div className={style.input}>
            <Field
              name="lastName"
              placeholder="Last Name"
              type="text"
              className={style.inp}
            />
            <ErrorMessage name="lastName" component={"p"} className="error" />
          </div>
          <div className={style.selectBlock}>
            <Field as="select" className={style.select} name="mont">
              {globalData[0].month.map((m) => (
                <option key={m.id} value={m.value}>
                  {m.title}
                </option>
              ))}
            </Field>
            <Field as="select" className={style.select} name="day">
              {globalData[0].day.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </Field>
            <Field as="select" className={style.select} name="year">
              {globalData[0].year.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Field>
          </div>
          <div className={style.selectBlock}>
            <label>
              Female
              <Field type="radio" name="gender" value="female" />
            </label>
            <label>
              Male
              <Field type="radio" name="gender" value="male" />
            </label>
            <label>
              Custom
              <Field type="radio" name="gender" value="custom" />
            </label>
          </div>
          <ErrorMessage name="gender" className="error" component={"p"} />
          <div className={style.inputBox}>
            <Field
              name="email"
              type="email"
              placeholder="Mobile number or email"
              className={style.inputBig}
            />
          </div>
          <ErrorMessage name="email" className="error" component={"p"} />
          <div className={style.inputBox}>
            <Field
              name="password"
              placeholder="New password"
              type="password"
              className={style.inputBig}
            />
          </div>
          <ErrorMessage name="password" className="error" component={"p"} />
          <div className={style.box}>
            <p>{globalData[0].desq1}</p>
            <p>{globalData[0].desq2}</p>
          </div>
          <button type="submit" className={style.button}>
            Sign Up
          </button>
        </Form>
      </Formik>
    </>
  );
}
