import {NavLink} from "@mantine/core";

type LinksProps = {
    data
};

export function Links({data }: LinksProps) {
    return (
        data.map(dt=>(
            <NavLink
                label={dt.label}
                href={dt.link}
                leftSection={dt.icon}
            >
                {
                    dt.drop && dt.drop.map(
                        nested=>(
                            <NavLink label={nested.label} href={nested.link} leftSection={nested.icon}/>
                        )
                    )
                }
            </NavLink>))
    );
}

