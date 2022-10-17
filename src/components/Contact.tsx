import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from "react-hook-form";
import {
  questionValidation,
  loginValidation,
  passwordValidation,
} from "./validation";

interface ISignInForm {
  login: string;
  password: string;
  ask: string;
}

export const Contact: React.FC = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <div className="w-3/4 m-auto mt-6">
      <Typography variant="h4" component="div">
        Enter
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        For Contact
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              label="Mail"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              error={!!errors.login?.message}
              helperText={errors?.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Password"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              type="password"
              error={!!errors?.password?.message}
              helperText={errors?.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="ask"
          rules={questionValidation}
          render={({ field }) => (
            <TextField
              label="Ask"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="medium"
              margin="normal"
              error={!!errors?.ask?.message}
              helperText={errors?.ask?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Submit
        </Button>
      </form>

      <div className="auth-form__footer">
        <Typography variant="subtitle1" component="span">
          Lorem ipsum dolor sit amet, ?{" "}
        </Typography>
        <Typography variant="subtitle1" component="span" sx={{ color: "blue" }}>
          consectetur
        </Typography>
      </div>
    </div>
  );
};
