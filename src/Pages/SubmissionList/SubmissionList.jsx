import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const SubmissionList = () => {
    const [fetchedUserId, setFetchedUserID] = useState('')
    const [fetchedSubmissionList, setFetchedSubmissionList] = useState([])
    const languageNames = {
        1: "ANSI C",
        2: "Java",
        3: "C++",
        4: "Pascal",
        5: "C++11",
        6: "Python 3",
        7: "Ruby",
        8: "C#",
        9: "Python 2",
        10: "PHP",
        11: "Perl",
        12: "Go",
        13: "FreeBASIC",
        14: "Rust",
        15: "Swift",
        16: "TypeScript",
        17: "JavaScript (Node.js)",
        18: "Kotlin",
        19: "Java (OpenJDK)",
        20: "Objective-C",
        21: "Scala",
        22: "D",
        23: "F#",
        24: "Pike",
        25: "Kotlin (JVM)",
        26: "Befunge",
        27: "Groovy",
        28: "Tcl",
        29: "Lua",
        30: "Java (HotSpot)",
        31: "PHP (8.0)",
        32: "Bash",
        33: "Other"
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const handleUserNameToUserId = async (e) => {
        e.preventDefault()
        const userName = e.target?.userName?.value
        try {
            const response = await axios.get(`https://uhunt.onlinejudge.org//api/uname2uid/${userName}`);
            // console.log(response.data);
            setFetchedUserID(response?.data)
            if (!response.data) {
                document.getElementById('my_modal_5').close();
                e.target.reset()
                return toast.error('No user id is found')
            }
            e.target.reset()
        } catch (error) {
            // console.log(error);
            e.target.reset()
            document.getElementById('my_modal_5').close();
            toast.error(error.message)
        }
    }

    const handleGetSubmissionList = async (e) => {
        e.preventDefault()
        const userId = e.target?.userId?.value
        const count = e.target?.count?.value
        console.log(userId, count);
        if (!count) {
            try {
                const response = await axios.get(`https://uhunt.onlinejudge.org/api/subs-user/${userId}`);
                console.log(response.data.subs);
                const subs = response?.data?.subs
                const sortedSubs = subs.sort((a, b) => b[4] - a[4]);
                setFetchedSubmissionList(sortedSubs)

                if (response.data?.subs.length === 0) {
                    e.target.reset()
                    return toast.error('No data is found')
                }
                e.target.reset()
            } catch (error) {
                e.target.reset()
                toast.error(error.message)
            }
        }
        else {
            try {
                const response = await axios.get(`https://uhunt.onlinejudge.org/api/subs-user-last/${userId}/${count}.`);
                const subs = response?.data?.subs
                const sortedSubs = subs.sort((a, b) => b[4] - a[4]);
                setFetchedSubmissionList(sortedSubs)
                if (response.data?.subs.length === 0) {
                    e.target.reset()
                    return toast.error('No data is found')
                }
                e.target.reset()
            } catch (error) {
                e.target.reset()
                toast.error(error.message)
            }
        }
    }

    const handleCloseModal = () => {
        document.getElementById('my_modal_5').close();
        setFetchedUserID('')
    }
    return (
        <div className="">

            <form onSubmit={handleGetSubmissionList} className="pt-11">
                <div className="flex justify-center gap-11">
                    <div>
                        <label htmlFor="userId" >User Id</label>
                        <input required type="text" id="userId" name='userId' placeholder="Your user id" className="input input-bordered input-primary w-full max-w-xs  mt-2" />


                        <div onClick={() => document.getElementById('my_modal_5').showModal()} className="tooltip" data-tip="Click to get your user id">
                            <i className="fa-solid fa-circle-info relative left-64 -top-9"></i>
                        </div>

                    </div>
                    <div>
                        <label htmlFor="count" className="">Submission Count</label>
                        <input type="text" id="count"
                            name="count" placeholder="Submission count" className="input input-bordered input-primary w-full max-w-xs  mt-2" />

                        <div className="tooltip" data-tip="The amount of submission you want to check">
                            <i className="fa-solid fa-circle-info relative -left-5"></i>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center">
                    <input type="submit" className="my-3 mx-auto text-center btn w-[30%] border-2 ml-20" value="Search" />
                </div>
            </form>
            <div className="text-red-500 text-center">
                <span className="font-semibold">Note : </span><span>If no submission count value is provided, all of your submissions will be listed.</span>
            </div>
            {
                fetchedSubmissionList?.length > 0 && <div className="my-7 w-full">
                    <h3 className="text-3xl font-medium my-5 text-center">Submission List</h3>
                    {
                        fetchedSubmissionList?.length > 0 && <div className="text-center mb-3">
                            <button onClick={()=>setFetchedSubmissionList([])} className="btn text-red-500 text-center">Clear List</button>
                        </div>
                    }
                    <table className="w-full ">
                        <thead className="bg-gray-300 text-black">
                            <tr >
                                <th className="border-2 p-2">Submission ID</th>
                                <th className="border-2 p-2">Problem ID</th>
                                <th className="border-2 p-2">Verdict ID</th>
                                <th className="border-2 p-2">Runtime(ms)</th>
                                <th className="border-2 p-2">Submission Time</th>
                                <th className="border-2 p-2">Language ID</th>
                                <th className="border-2 p-2">Submission Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchedSubmissionList?.map((submission, index) => (
                                <tr className="border-b text-center" key={index}>
                                    <td className="p-2">{submission[0]}</td>
                                    <td className="p-2">{submission[1]}</td>
                                    <td className="p-2">{submission[2]}</td>
                                    <td className="p-2">{submission[3]}</td>
                                    <td>{formatDate(submission[4])}</td>
                                    <td>{languageNames[submission[5]]}</td>
                                    <td className="p-2">{submission[6]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action">
                        <form onSubmit={handleUserNameToUserId} className=" w-full" method="dialog ">
                            <div className="flex flex-col pl-20 ">
                                <label htmlFor="userName" className="text-xl">User name</label>
                                <input required type="text" name="userName" id="userName" placeholder="Your user name" className="input input-bordered input-primary w-[70%]  mt-2" />
                            </div>
                            <button onClick={handleCloseModal} className="btn relative text-red-400 hover:text-red-600 bottom-[81%] left-[93%]">X</button>


                            <input type="submit" className="my-3 mx-auto text-center btn w-[40%] ml-20" value="Submit" />
                        </form>
                    </div>
                    {
                        fetchedUserId ? <p className="font-semibold text-blue-700">Your user id is: {fetchedUserId} </p> : ''
                    }
                </div>
            </dialog>
        </div>
    );
};

export default SubmissionList;