import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
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

      <S.DoNotHaveAccount>
        {`Don't`} have an account? <Link href="#">Sign up</Link>
      </S.DoNotHaveAccount>
    </form>
  </S.Wrapper>
)

export default FormSignIn
