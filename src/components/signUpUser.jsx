import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const SignUpUser = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match.');
    } else {
      alert(JSON.stringify(data, null, 2));
      console.log(data);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: 'First Name is required' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.firstName && <p className='warning'>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: 'Last Name is required' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.lastName && <p className='warning'>{errors.lastName.message}</p>}
        </div>
        <div>
          <label>Username:</label>
          <Controller
            name="userName"
            control={control}
            defaultValue=""
            rules={{ required: 'Username is required' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.userName && <p className='warning'>{errors.userName.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => <input {...field} />}
          />
          {errors.email && <p className='warning'>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: 'Password is required' }}
            render={({ field }) => <input type="password" {...field} />}
          />
          {errors.password && <p className='warning'>{errors.password.message}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{ required: 'Confirm Password is required' }}
            render={({ field }) => <input type="password" {...field} />}
          />
          {errors.confirmPassword && <p className='warning'>{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpUser;
