import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => {
    return (
         <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta
                name="description"
                content={description && description}
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </Helmet>
    )
}

export default Seo