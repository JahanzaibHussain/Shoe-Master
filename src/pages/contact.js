import React from 'react'

function Contact() {
    return (
        <div className="py-6 px-5">
            <h2 className="text-primary text-center text-4xl ">Contact Us</h2>
            <form class="w-full  ">
                <div class="flex flex-wrap mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-secondary-200 text-white border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-secondary-100" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-secondary-200 text-white border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-secondary-100" id="grid-first-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Subject
                        </label>
                        <input class="appearance-none block w-full bg-secondary-200 text-white border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-secondary-100" id="grid-first-name" type="text" placeholder="Inquiry" />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Contact
                        </label>
                        <input class="appearance-none block w-full bg-secondary-200 text-white border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-secondary-100" id="grid-first-name" type="text" placeholder="0312-1212121" />
                    </div>
                </div>
                <div class="flex flex-wrap mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Message
                        </label>
                        <textarea class="resize-x h-32 appearance-none block w-full bg-secondary-200 text-white border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-secondary-100 focus:border-primary"></textarea>
                    </div>
                </div>
                <div class="flex pb-4 justify-center">
                    <input type="submit" className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Contact
