import type { MDXComponents } from 'mdx/types'

export function articleMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,


        "h1": ({ children }) => {
            return <h1 className="pb-2 mt-6 mb-4 text-3xl font-bold  border-b-2 border-dashed border-gray-300 dark:border-gray-700 first:mt-0">
                {children}
            </h1>
        },
        "h2": ({ children }) => {
            return <h2 className="pb-2 mt-8 mb-6 text-2xl font-bold  border-b-2 border-dashed border-gray-300 dark:border-gray-700 first:mt-0">
                {children}
            </h2>
        },
        "h3": ({ children }) => {
            return <h3 className="text-xl font-bold mt-8 mb-3">
                {children}
            </h3>
        },
        "h4": ({ children }) => {
            return <h4 className="text-lg font-bold mt-8 mb-3">
                {children}
            </h4>
        },
        "h5": ({ children }) => {
            return <h5 className="text-base font-bold mt-8 mb-3">
                {children}
            </h5>
        },
        "h6": ({ children }) => {
            return <h6 className="text-sm font-bold mt-8 mb-3">
                {children}
            </h6>
        },

        "hr": () => {
            return <hr className="my-9 border-t-2 border-gray-300 dark:border-gray-700 border-dashed" />
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
            return <th className="px-2 py-1 font-bold border border-gray-300 dark:border-gray-700 align-middle bg-gray-200 dark:bg-gray-800">
                {children}
            </th>
        },
        "td": ({ children }) => {
            return <td className="p-2 border border-gray-300 dark:border-gray-700 ">
                {children}
            </td>
        },

        "p": ({ children }) => {
            return <p className="">{children}</p>
        },


        /* List */
        "ul": ({ children }) => {
            return <ul className="list-disc list-inside">{children}</ul>
        },
        "ol": ({ children }) => {
            return <ol className="list-decimal list-inside">{children}</ol>
        },
        "li": ({ children }) => {
            return <li className="">{children}</li>
        },
        "blockquote": ({ children }) => {
            return <blockquote className="border-l-4 px-2 my-3 border-gray-300 dark:border-gray-700 align-middle">
                <div className='p-2' >{children}</div>
            </blockquote>
        }
    }
}