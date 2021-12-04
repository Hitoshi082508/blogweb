import React, { useState } from 'react'
import styled from 'styled-components'
import { AnswerButton } from '../atoms/AnswerButton'
// component
import { AnswerInput } from '../atoms/AnswerInput'
import { AnswerTextInput } from '../atoms/AnswerTextArea'
import { Question } from '../atoms/Question'
import { Title } from '../atoms/Title'
type Styling = {}
type Props = {
  className?: string
}
export const FCContact: React.FC<Props & Styling> = ({ className }) => {
  const [name, setName] = useState<string>();
  const [tel, setTel] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [text, setText] = useState<string>();
  const submit = async (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault()
    const res = await fetch('/api/send', {
      body: JSON.stringify({
        name: name,
        tel: tel,
        email: email,
        text: text
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const result = await res.json()
  }
  return (
    <div className={className} onSubmit={submit}>
      <Title text="Contact" />
      <form className={`${className}__container`}>
        <Question text="あなたの名前を教えてください！" />
        <AnswerInput placeholder="名前を入力する" type="text" onChange={(v: string) => setName(v)} />
        <Question text="あなたの電話番号を教えてください！" />
        <AnswerInput placeholder="電話番号を入力する" type="tel" onChange={(v: string) => setTel(v)}/>
        <Question text="あなたのEmailを教えてください！" />
        <AnswerInput placeholder="メールアドレスを入力する" type="email" onChange={(v: string) => setEmail(v)}/>
        <Question text="なんでも気軽にお問い合わせください！" />
        <AnswerTextInput placeholder="メッセージを入力する" onChange={(v: string) => setText(v)} />
        <Question text="この内容で送信してもよろしいですか？" />
        <AnswerButton text="メッセージを送信する"/>
      </form>
    </div>
  )
}
export const Contact = styled(FCContact)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;
  ${({ theme }) => theme.media.sp`
    margin-bottom: 50px;
  `}
  &__container {
    width: 97%;
    background-color: #FFF;
    border-radius: 46px;
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    padding-bottom: 140px;
    ${({ theme }) => theme.media.sp`
      padding-top: 75px;
      padding-bottom: 75px;
    `}
  }
`