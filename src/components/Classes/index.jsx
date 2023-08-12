import { styled } from "styled-components";
import * as Styled from "../../Pages/StudantPage/styled"
import { Collapse, List, ListItem, ListItemText, Paper } from "@mui/material";
import { IoIosArrowDropdown } from "react-icons/io"
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Class({ className, classData }) {

    const [expanded, setExpanded] = useState(false);
    const [classDone, setClassDone] = useState(false)
    const [aula, setAula] = useState()

    useEffect(() => {
        const aulaDesejada = (removeDiacritics(className)).toLowerCase()

        if (classData !== undefined) {
            const aulaConcluida = classData?.classes?.some(item => item.aula === aulaDesejada)
            console.log(aulaConcluida)
            const aula = classData?.classes?.filter(item => item.aula === aulaDesejada)
            setAula(aula[0])
            setClassDone(aulaConcluida)
        }

    }, [])

    const toggleExpand = () => {
        if (classDone) {
            setExpanded(!expanded);
        }
    };

    function removeDiacritics(str) {
        const diacriticsMap = {
            'ç': 'c',
            'Ç': 'C',
            'ã': 'a',
            'õ': 'o',
            'é': 'e'
        };

        return str.replace(/[çÇãõé]/g, match => diacriticsMap[match]);
    }

    return (
        <>
            <Styled.ItemClass onClick={toggleExpand} classDone={classDone}>
                <p>{className}</p>
                <Styled.Icone>
                    <IoIosArrowDropdown style={{ fontSize: "30px" }} />
                </Styled.Icone>
            </Styled.ItemClass>

            <StyledContainerData style={{ width: '250px' }}>
                <Collapse in={expanded}>
                    <StyledData>
                        <List>
                            <ListItem>
                                <ListItemText primary={`Aula concluída em: ${dayjs(aula?.createdAt).format('DD/MM/YYYY')}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`Professor(a): ${aula?.professor}`} />
                            </ListItem>
                        </List>
                    </StyledData>

                </Collapse>
            </StyledContainerData>
        </>
    )
}

const StyledContainerData = styled(Paper)`

`;

const StyledData = styled.div`
  padding: 10px;
`;