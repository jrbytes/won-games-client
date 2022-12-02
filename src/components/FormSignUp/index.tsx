import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import Link from 'next/link'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="text"
        icon={<AccountCircle />}
      />
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
      <TextField
        name="confirm-password"
        type="confirm-password"
        placeholder="Confirm Password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <S.AlreadyHaveAccount>
        Already have an account? <Link href="#">Sign in</Link>
      </S.AlreadyHaveAccount>
    </form>
  </S.Wrapper>
)

export default FormSignUp
