import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink } from '../Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        type="email"
        placeholder="Email"
        icon={<Email />}
      />
      <TextField
        name="password"
        type="password"
        placeholder="Password"
        icon={<Lock />}
      />
      <Link href="#">
        <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
      </Link>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        {`Don't`} have an account? <Link href="/sign-up">Sign up</Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
