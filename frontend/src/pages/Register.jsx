import { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormRow, ToggleTheme } from '../components';
import { loginUser, registerUser } from '../features/user/userSlice';
import { registerData, initialState } from '../utils';
import axios from 'axios';

const reducer = (state, action) => {
  if (action.type === 'REGISTER') {
    return {
      ...state,
      formData: {
        ...state.formData,
        [action.payload.name]: action.payload.value,
      },
      //
    };
  }

  if (action.type === 'TOGGLE_MEMBER') {
    return {
      ...state,
      isMember: !state.isMember,
    };
  }
  throw new Error('Invalid action');
};

function Register() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, user } = useSelector((store) => store.user);

  const reduxDispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch({ type: 'REGISTER', payload: { value, name } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = state.formData;
    const { isMember } = state;
    if (!email || !password || (!isMember && !name)) {
      console.log('please fill out this field');
      return;
    }
    if (isMember) {
      reduxDispatch(loginUser({ email, password }));
      return;
    }
    reduxDispatch(registerUser({ name, email, password }));
  };
  const toggleMember = () => {
    dispatch({ type: 'TOGGLE_MEMBER' });
  };

  return (
    <div>
      <section className="registerpage bg-5964E0 {-- h-screen --} dark:bg-121721">
        <div className="mx-auto h-screen flex justify-center tablet:items-center relative tablet:h-full border border-5964E0">
          <div className="absolute top-0 right-0 pt-2 mr-4">
            <svg width={200} height={144} xmlns="http://www.w3.org/2000/svg">
              <g className="fill-white dark:fill-5964E0" fillRule="evenodd">
                <rect width={4} height={4} rx={2} />
                <rect x={23} width={4} height={4} rx={2} />
                <rect x={45} width={4} height={4} rx={2} />
                <rect x={68} width={4} height={4} rx={2} />
                <rect x={90} width={4} height={4} rx={2} />
                <rect x={113} width={4} height={4} rx={2} />
                <rect x={135} width={4} height={4} rx={2} />
                <rect x={158} width={4} height={4} rx={2} />
                <rect x={181} width={4} height={4} rx={2} />
                <rect x={203} width={4} height={4} rx={2} />
                <rect y={18} width={4} height={4} rx={2} />
                <rect x={23} y={18} width={4} height={4} rx={2} />
                <rect x={45} y={18} width={4} height={4} rx={2} />
                <rect x={68} y={18} width={4} height={4} rx={2} />
                <rect x={90} y={18} width={4} height={4} rx={2} />
                <rect x={113} y={18} width={4} height={4} rx={2} />
                <rect x={135} y={18} width={4} height={4} rx={2} />
                <rect x={158} y={18} width={4} height={4} rx={2} />
                <rect x={181} y={18} width={4} height={4} rx={2} />
                <rect x={203} y={18} width={4} height={4} rx={2} />
                <rect y={35} width={4} height={4} rx={2} />
                <rect x={23} y={35} width={4} height={4} rx={2} />
                <rect x={45} y={35} width={4} height={4} rx={2} />
                <rect x={68} y={35} width={4} height={4} rx={2} />
                <rect x={90} y={35} width={4} height={4} rx={2} />
                <rect x={113} y={35} width={4} height={4} rx={2} />
                <rect x={135} y={35} width={4} height={4} rx={2} />
                <rect x={158} y={35} width={4} height={4} rx={2} />
                <rect x={181} y={35} width={4} height={4} rx={2} />
                <rect x={203} y={35} width={4} height={4} rx={2} />
                <rect y={53} width={4} height={4} rx={2} />
                <rect x={23} y={53} width={4} height={4} rx={2} />
                <rect x={45} y={53} width={4} height={4} rx={2} />
                <rect x={68} y={53} width={4} height={4} rx={2} />
                <rect x={90} y={53} width={4} height={4} rx={2} />
                <rect x={113} y={53} width={4} height={4} rx={2} />
                <rect x={135} y={53} width={4} height={4} rx={2} />
                <rect x={158} y={53} width={4} height={4} rx={2} />
                <rect x={181} y={53} width={4} height={4} rx={2} />
                <rect x={203} y={53} width={4} height={4} rx={2} />
                <rect y={70} width={4} height={4} rx={2} />
                <rect x={23} y={70} width={4} height={4} rx={2} />
                <rect x={45} y={70} width={4} height={4} rx={2} />
                <rect x={68} y={70} width={4} height={4} rx={2} />
                <rect x={90} y={70} width={4} height={4} rx={2} />
                <rect x={113} y={70} width={4} height={4} rx={2} />
                <rect x={135} y={70} width={4} height={4} rx={2} />
                <rect x={158} y={70} width={4} height={4} rx={2} />
                <rect x={181} y={70} width={4} height={4} rx={2} />
                <rect x={203} y={70} width={4} height={4} rx={2} />
                <rect y={88} width={4} height={4} rx={2} />
                <rect x={23} y={88} width={4} height={4} rx={2} />
                <rect x={45} y={88} width={4} height={4} rx={2} />
                <rect x={68} y={88} width={4} height={4} rx={2} />
                <rect x={90} y={88} width={4} height={4} rx={2} />
                <rect x={113} y={88} width={4} height={4} rx={2} />
                <rect x={135} y={88} width={4} height={4} rx={2} />
                <rect x={158} y={88} width={4} height={4} rx={2} />
                <rect x={181} y={88} width={4} height={4} rx={2} />
                <rect x={203} y={88} width={4} height={4} rx={2} />
                <rect y={105} width={4} height={4} rx={2} />
                <rect x={23} y={105} width={4} height={4} rx={2} />
                <rect x={45} y={105} width={4} height={4} rx={2} />
                <rect x={68} y={105} width={4} height={4} rx={2} />
                <rect x={90} y={105} width={4} height={4} rx={2} />
                <rect x={113} y={105} width={4} height={4} rx={2} />
                <rect x={135} y={105} width={4} height={4} rx={2} />
                <rect x={158} y={105} width={4} height={4} rx={2} />
                <rect x={181} y={105} width={4} height={4} rx={2} />
                <rect x={203} y={105} width={4} height={4} rx={2} />
                <rect y={123} width={4} height={4} rx={2} />
                <rect x={23} y={123} width={4} height={4} rx={2} />
                <rect x={45} y={123} width={4} height={4} rx={2} />
                <rect x={68} y={123} width={4} height={4} rx={2} />
                <rect x={90} y={123} width={4} height={4} rx={2} />
                <rect x={113} y={123} width={4} height={4} rx={2} />
                <rect x={135} y={123} width={4} height={4} rx={2} />
                <rect x={158} y={123} width={4} height={4} rx={2} />
                <rect x={181} y={123} width={4} height={4} rx={2} />
                <rect x={203} y={123} width={4} height={4} rx={2} />
                <rect y={140} width={4} height={4} rx={2} />
                <rect x={23} y={140} width={4} height={4} rx={2} />
                <rect x={45} y={140} width={4} height={4} rx={2} />
                <rect x={68} y={140} width={4} height={4} rx={2} />
                <rect x={90} y={140} width={4} height={4} rx={2} />
                <rect x={113} y={140} width={4} height={4} rx={2} />
                <rect x={135} y={140} width={4} height={4} rx={2} />
                <rect x={158} y={140} width={4} height={4} rx={2} />
                <rect x={181} y={140} width={4} height={4} rx={2} />
                <rect x={203} y={140} width={4} height={4} rx={2} />
              </g>
            </svg>
          </div>
          <div className="absolute bottom-5 right-0 pt-2 mr-4">
            <ToggleTheme />
          </div>
          <form
            id="register"
            className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-gray-800 mb-32 sm:mb-0 my-40 sm:my-12 px-6 sm:px-0"
            onSubmit={handleSubmit}
          >
            <div className="px-2 flex flex-col items-center justify-center mt-8 sm:mt-0">
              <img
                src="/assets/desktop/logo.svg"
                className="w-115 h-8"
                alt=""
              />
            </div>
            <div className="pt-16 px-2 flex flex-col items-center justify-center">
              <h3 className="text-heading-3 sm:text-heading-4 xl:text-heading-2 font-bold text-white leading-tight">
                {state.isMember ? 'Sign in' : ' Sign up'}
              </h3>
            </div>
            <div className="mt-12 w-full px-2 sm:px-6">
              {!state.isMember
                ? registerData.map((item) => {
                    return (
                      <FormRow
                        key={item.id}
                        statevalue={state.formData[item['value']]}
                        handleChange={handleChange}
                        {...item}
                      />
                    );
                  })
                : registerData
                    .map((item) => {
                      return (
                        <FormRow
                          key={item.id}
                          statevalue={state.formData[item['value']]}
                          handleChange={handleChange}
                          {...item}
                        />
                      );
                    })
                    .slice(1, 3)}
              <div className="pt-6 w-full flex justify-between px-2 sm:px-0">
                <div className="flex items-center ">
                  <input
                    id="rememberme"
                    name="rememberme"
                    className="w-3 h-3 mr-2 bg-body-bg"
                    type="checkbox"
                  />
                  <label htmlFor="rememberme" className="text-body text-white">
                    Remember Me
                  </label>
                </div>
                <Link
                  to="/"
                  className="text-body text-white"
                  href="javascript: void(0)"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="mb-16 sm:mb-56 tablet:mb-16">
                <button className="focus:outline-none w-full bg-light-violet dark:bg-5964E0 transition duration-150 ease-in-out dark:hover:bg-939BF4 rounded text-white px-8 py-3 text-heading-3 mt-6">
                  {state.loading ? (
                    <div className="mx-auto w-6 h-6 bg-121721 rounded-full flex animate-spin shadow-md">
                      <div className=" w-1/2 h-6 bg-white rounded-l-full"></div>
                      <div className=" w-1/2 h-6 bg-light-violet rounded-r-full"></div>
                    </div>
                  ) : state.isMember ? (
                    'Login'
                  ) : (
                    'Register'
                  )}
                </button>
                <div className="flex mt-6 justify-center items-center gap-2">
                  <p className="text-body text-center text-white">
                    {!state.isMember
                      ? '  Have An Account?'
                      : "Don't Have An Account?"}{' '}
                  </p>
                  <button
                    onClick={toggleMember}
                    className="text-white  underline"
                  >
                    {!state.isMember ? 'Login' : 'Register'}
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="absolute -bottom-0 left-0 pb-2 ml-4 hidden sm:block ">
            <svg width={200} height={144} xmlns="http://www.w3.org/2000/svg">
              <g className="fill-white dark:fill-5964E0" fillRule="evenodd">
                <rect width={4} height={4} rx={2} />
                <rect x={23} width={4} height={4} rx={2} />
                <rect x={45} width={4} height={4} rx={2} />
                <rect x={68} width={4} height={4} rx={2} />
                <rect x={90} width={4} height={4} rx={2} />
                <rect x={113} width={4} height={4} rx={2} />
                <rect x={135} width={4} height={4} rx={2} />
                <rect x={158} width={4} height={4} rx={2} />
                <rect x={181} width={4} height={4} rx={2} />
                <rect x={203} width={4} height={4} rx={2} />
                <rect y={18} width={4} height={4} rx={2} />
                <rect x={23} y={18} width={4} height={4} rx={2} />
                <rect x={45} y={18} width={4} height={4} rx={2} />
                <rect x={68} y={18} width={4} height={4} rx={2} />
                <rect x={90} y={18} width={4} height={4} rx={2} />
                <rect x={113} y={18} width={4} height={4} rx={2} />
                <rect x={135} y={18} width={4} height={4} rx={2} />
                <rect x={158} y={18} width={4} height={4} rx={2} />
                <rect x={181} y={18} width={4} height={4} rx={2} />
                <rect x={203} y={18} width={4} height={4} rx={2} />
                <rect y={35} width={4} height={4} rx={2} />
                <rect x={23} y={35} width={4} height={4} rx={2} />
                <rect x={45} y={35} width={4} height={4} rx={2} />
                <rect x={68} y={35} width={4} height={4} rx={2} />
                <rect x={90} y={35} width={4} height={4} rx={2} />
                <rect x={113} y={35} width={4} height={4} rx={2} />
                <rect x={135} y={35} width={4} height={4} rx={2} />
                <rect x={158} y={35} width={4} height={4} rx={2} />
                <rect x={181} y={35} width={4} height={4} rx={2} />
                <rect x={203} y={35} width={4} height={4} rx={2} />
                <rect y={53} width={4} height={4} rx={2} />
                <rect x={23} y={53} width={4} height={4} rx={2} />
                <rect x={45} y={53} width={4} height={4} rx={2} />
                <rect x={68} y={53} width={4} height={4} rx={2} />
                <rect x={90} y={53} width={4} height={4} rx={2} />
                <rect x={113} y={53} width={4} height={4} rx={2} />
                <rect x={135} y={53} width={4} height={4} rx={2} />
                <rect x={158} y={53} width={4} height={4} rx={2} />
                <rect x={181} y={53} width={4} height={4} rx={2} />
                <rect x={203} y={53} width={4} height={4} rx={2} />
                <rect y={70} width={4} height={4} rx={2} />
                <rect x={23} y={70} width={4} height={4} rx={2} />
                <rect x={45} y={70} width={4} height={4} rx={2} />
                <rect x={68} y={70} width={4} height={4} rx={2} />
                <rect x={90} y={70} width={4} height={4} rx={2} />
                <rect x={113} y={70} width={4} height={4} rx={2} />
                <rect x={135} y={70} width={4} height={4} rx={2} />
                <rect x={158} y={70} width={4} height={4} rx={2} />
                <rect x={181} y={70} width={4} height={4} rx={2} />
                <rect x={203} y={70} width={4} height={4} rx={2} />
                <rect y={88} width={4} height={4} rx={2} />
                <rect x={23} y={88} width={4} height={4} rx={2} />
                <rect x={45} y={88} width={4} height={4} rx={2} />
                <rect x={68} y={88} width={4} height={4} rx={2} />
                <rect x={90} y={88} width={4} height={4} rx={2} />
                <rect x={113} y={88} width={4} height={4} rx={2} />
                <rect x={135} y={88} width={4} height={4} rx={2} />
                <rect x={158} y={88} width={4} height={4} rx={2} />
                <rect x={181} y={88} width={4} height={4} rx={2} />
                <rect x={203} y={88} width={4} height={4} rx={2} />
                <rect y={105} width={4} height={4} rx={2} />
                <rect x={23} y={105} width={4} height={4} rx={2} />
                <rect x={45} y={105} width={4} height={4} rx={2} />
                <rect x={68} y={105} width={4} height={4} rx={2} />
                <rect x={90} y={105} width={4} height={4} rx={2} />
                <rect x={113} y={105} width={4} height={4} rx={2} />
                <rect x={135} y={105} width={4} height={4} rx={2} />
                <rect x={158} y={105} width={4} height={4} rx={2} />
                <rect x={181} y={105} width={4} height={4} rx={2} />
                <rect x={203} y={105} width={4} height={4} rx={2} />
                <rect y={123} width={4} height={4} rx={2} />
                <rect x={23} y={123} width={4} height={4} rx={2} />
                <rect x={45} y={123} width={4} height={4} rx={2} />
                <rect x={68} y={123} width={4} height={4} rx={2} />
                <rect x={90} y={123} width={4} height={4} rx={2} />
                <rect x={113} y={123} width={4} height={4} rx={2} />
                <rect x={135} y={123} width={4} height={4} rx={2} />
                <rect x={158} y={123} width={4} height={4} rx={2} />
                <rect x={181} y={123} width={4} height={4} rx={2} />
                <rect x={203} y={123} width={4} height={4} rx={2} />
                <rect y={140} width={4} height={4} rx={2} />
                <rect x={23} y={140} width={4} height={4} rx={2} />
                <rect x={45} y={140} width={4} height={4} rx={2} />
                <rect x={68} y={140} width={4} height={4} rx={2} />
                <rect x={90} y={140} width={4} height={4} rx={2} />
                <rect x={113} y={140} width={4} height={4} rx={2} />
                <rect x={135} y={140} width={4} height={4} rx={2} />
                <rect x={158} y={140} width={4} height={4} rx={2} />
                <rect x={181} y={140} width={4} height={4} rx={2} />
                <rect x={203} y={140} width={4} height={4} rx={2} />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
