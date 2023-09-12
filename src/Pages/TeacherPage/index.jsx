import { useState } from "react"
import InputSelect from "../../components/Form/InputSelect"
import * as styled from "./styled"
import InputCheckBox from "../../components/Form/InputCheckBox"
import { datas } from "../../utils/datas"


export default function Teacher() {

    const [nameTeacher, setNameTeacher] = useState()
    const [nameClass, setNameClass] = useState()
    const [students, setStudents] = useState([])

    return (
        <>
            <styled.Main>
                <styled.Menu>
                    <styled.Container>
                        <p>{"SPEED"}</p>
                    </styled.Container>
                </styled.Menu>

                <styled.User>
                    <h1>Bem-vindo(a), Professor(a)!</h1>
                </styled.User>

                <styled.ContainerSelect>
                   <InputSelect data={datas.teachers} label="o seu nome" value={nameTeacher} onChange={e => setNameTeacher(e.target.value)} />
                   <InputSelect data={datas.classes} label="a sua aula" value={nameClass} onChange={e => setNameClass(e.target.value)} />
                   <InputCheckBox />
                </styled.ContainerSelect>
            </styled.Main>

           


        </>
    )
}