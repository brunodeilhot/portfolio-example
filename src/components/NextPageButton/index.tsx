import { Button } from "./styles";

type Props = {
    path: string,
    label: string,
}

const NextPageButton: React.FC<Props> = ({path, label}) => {

    return (
        <Button to={path}>
            {label}
        </Button>
    )
}

export default NextPageButton;