import type {FC} from 'react';

type ButtonProps = {
    text: string;
};

export const Button: FC<ButtonProps> = ({
    text
}) => {
    console.log('HELLO');
    
    return (
        <button>
            {text}
        </button>
    );
};