import type { MDXComponents } from 'mdx/types'

export function articleMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,


        "h1": ({ children }) => {
            return <h1 className="mb-4 mt-6 border-b-2 border-dashed border-gray-300  pb-2 text-3xl font-bold first:mt-0 dark:border-gray-700">
                {children}
            </h1>
        },
        "h2": ({ children }) => {
            return <h2 className="mb-6 mt-8 border-b-2 border-dashed border-gray-300  pb-2 text-2xl font-bold first:mt-0 dark:border-gray-700">
                {children}
            </h2>
        },
        "h3": ({ children }) => {
            return <h3 className="mb-2 mt-8 text-xl font-bold">
                {children}
            </h3>
        },
        "h4": ({ children }) => {
            return <h4 className="mb-2 mt-8 text-lg font-bold">
                {children}
            </h4>
        },
        "h5": ({ children }) => {
            return <h5 className="mb-2 mt-8 text-base font-bold">
                {children}
            </h5>
        },
        "h6": ({ children }) => {
            return <h6 className="mb-2 mt-8 text-sm font-bold">
                {children}
            </h6>
        },

        "hr": () => {
            return <hr className="my-9 border-t-2 border-dashed border-gray-300 dark:border-gray-700" />
        },

        /* Table */
        "table": ({ children }) => {
            return <div className="overflow-x-auto">
                <table className="table-auto  ">
                    {children}
                </table>
            </div>
        },
        "th": ({ children }) => {
            return <th className="border border-gray-300 bg-gray-200 px-2 py-1 align-middle font-bold dark:border-gray-700 dark:bg-gray-800">
                {children}
            </th>
        },
        "td": ({ children }) => {
            return <td className="border border-gray-300 p-2 dark:border-gray-700 ">
                {children}
            </td>
        },

        "p": ({ children }) => {
            return <p className="mb-4 leading-8">{children}</p>
        },


        /* List */
        "ul": ({ children }) => {
            return <ul className="list-inside list-disc leading-8">{children}</ul>
        },
        "ol": ({ children }) => {
            return <ol className="list-inside list-decimal leading-8">{children}</ol>
        },
        "li": ({ children }) => {
            return <li className="leading-8">{children}</li>
        },
        "blockquote": ({ children }) => {
            return <blockquote className="my-3 border-l-4 border-gray-300 px-2 align-middle dark:border-gray-700">
                <div className='p-2 leading-8' >{children}</div>
            </blockquote>
        }
    }
}