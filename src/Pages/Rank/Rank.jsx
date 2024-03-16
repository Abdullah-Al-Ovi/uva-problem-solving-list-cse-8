import axios from "axios";
import { useEffect, useState } from "react";

const Rank = ({ submissionCounts }) => {
    if (!submissionCounts || !Array.isArray(submissionCounts)) {
        console.error("submissionCounts is either undefined or not an array:", submissionCounts);
        return <div>Error: Unable to fetch submission counts</div>;
    }
    return (
        <div className="text-xs md:text-base">
            <div className="flex justify-center items-center">
                <h2 className="text-lg md:text-2xl md:font-bold my-7 md:my-4 md:text-center text-left">CSE-8 Intra Batch Contest <sup className="text-base md:font-medium">Powered by Md. Erfan</sup></h2>
                <div className="tooltip tooltip-left md:tooltip-bottom ml-2" data-tip="The ranking is determined based on the number of successful submissions. If two or more users have the same number of successful submissions, the rank is then determined by comparing their lower unsuccessful submission counts.If one problem is Accepted once,it won't be counted in submission any type of count.">
                    <i className="fa-solid fa-circle-info"></i>
                </div>
            </div>
            <div className="overflow-x-scroll">
            <table className="border-collapse border border-gray-400 w-full">
                <thead className="bg-gray-300 text-black">
                    <tr>
                        <th className="border-2 p-2">Rank</th>
                        <th className="border-2 p-2">Roll</th>
                        <th className="border border-gray-400 px-4 py-2">User ID</th>
                        <th className="border-2 p-2">Name</th>
                        <th className="border-2 p-2 bg-blue-300">Total Submissions</th>
                        <th className="border-2 p-2 bg-green-300">Successful Submissions</th>
                        <th className="border-2 p-2 bg-red-300">Unsuccessful Submissions</th>
                    </tr>
                </thead>
                <tbody>
                    {submissionCounts?.map(({ userId, roll, name, totalSubmissions, successfulSubmissions, unsuccessfulSubmissions }, index) => (
                        <tr key={userId} className="border-b text-center">
                           <td className={`border border-gray-600 px-4 py-2 ${index === 0 || index === 1 || index === 2 ? 'text-orange-600 font-bold' : index === 3 || index === 4 || index === 5 || index === 6  ? 'text-indigo-500 font-semibold' : ''}`}>{index + 1}<span className="text-xs">{index === 0 || index === 1 || index === 2 ? '👑' : index === 3 || index === 4 || index === 5 || index === 6  ? '⭐' : ''}</span></td>
                            <td className={`border border-gray-600 px-4 py-2 ${index === 0 || index === 1 || index === 2 ? 'text-orange-600 font-bold' : index === 3 || index === 4 || index === 5 || index === 6 ? 'text-indigo-500 font-semibold' : ''}`}>{roll}</td>
                            <td className={`border border-gray-600 px-4 py-2 ${index === 0 || index === 1 || index === 2 ? 'text-orange-600 font-bold' : index === 3 || index === 4 || index === 5 || index === 6  ? 'text-indigo-500 font-semibold' : ''}`}>{userId}</td>
                            <td className={`border border-gray-600 px-4 py-2 ${index === 0 || index === 1 || index === 2 ? 'text-orange-600 font-bold' : index === 3 || index === 4 || index === 5 || index === 6  ? 'text-indigo-500 font-semibold' : ''}`}>{name}</td>
                            <td className="border border-gray-400 px-4 py-2">{totalSubmissions}</td>
                            <td className="border border-gray-400 px-4 py-2">{successfulSubmissions}</td>
                            <td className="border border-gray-400 px-4 py-2">{unsuccessfulSubmissions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

const calculateSubmissionCounts = async (users, problemIds, minSubsId) => {
    const userIdsCSV = users.map(user => user.userId).join(",");
    const problemIdsCSV = problemIds.join(",");
    const response = await axios.get(`https://uhunt.onlinejudge.org/api/subs-pids/${userIdsCSV}/${problemIdsCSV}/${minSubsId}`);
    const submissionsData = response.data;
console.log(submissionsData);
    const counts = users.map(user => ({
        userId: user.userId,
        roll: user.roll,
        name: user.name,
        totalSubmissions: 0,
        successfulSubmissions: 0,
        unsuccessfulSubmissions: 0,
        acceptedProblems: new Set(), 
    }));

    for (const userId in submissionsData) {
        const userIndex = counts.findIndex(user => user.userId === userId);
        if (userIndex !== -1) {
            const submissions = submissionsData[userId].subs;
            counts[userIndex].totalSubmissions = submissions.length;
            submissions.forEach(submission => {
                const problemId = submission[1];
                if (submission[2] === 90 && !counts[userIndex].acceptedProblems.has(problemId)) {
                    counts[userIndex].successfulSubmissions++;
                    counts[userIndex].acceptedProblems.add(problemId); // 
                } else {
                    counts[userIndex].unsuccessfulSubmissions++;
                }
            });
        }
    }


    counts.sort((a, b) => {
        if (a.successfulSubmissions !== b.successfulSubmissions) {
            return b.successfulSubmissions - a.successfulSubmissions; // 
        } else {
            return a.unsuccessfulSubmissions - b.unsuccessfulSubmissions; 
        }
    });

    return counts;
};


const RankPage = () => {

    const minSubsId = 0; 

    const [submissionCounts, setSubmissionCounts] = useState([]);

    useEffect(() => {
        const users = [
            { userId: "1650008", roll: "21CSE001", name: "Sauda Tus Sahadia"},
            { userId: "1336892", roll: "21CSE002", name: "Shantanu Mandal"},
            { userId: "1278946", roll: "21CSE003", name: "Md Azom uddin"},
            { userId: "1336829", roll: "21CSE004", name: "Md. Abu Syeed Abdullah"},
            { userId: "1650051", roll: "21CSE005", name: "Maria Islam"},
            { userId: "1344988", roll: "21CSE007", name: "Farjana Haque Khan"},
            { userId: "1336711", roll: "21CSE008", name: "Md.Imran Sikder"},
            { userId: "1336743", roll: "21CSE011", name: "Sabiha Akter Tanny"},
            { userId: "1650147", roll: "21CSE012", name: "Tamanna Akter"},
            { userId: "1649037", roll: "21CSE013", name: "Arghay Deb Paul"},
            { userId: "1335320", roll: "21CSE015", name: "Mosa.Tahira Akteri Anee"},
            { userId: "1650076", roll: "21CSE016", name: "Samira Meem Showry"},
            { userId: "1336692", roll: "21CSE021", name: "Md. Israk Ahmmed"},
            { userId: "1337405", roll: "21CSE022", name: "Tian Mahamud"},
            { userId: "1650072", roll: "21CSE023", name: "Pronay Mondal"},
            { userId: "1615559", roll: "21CSE024", name: "Asmahul Husna"},
            { userId: "1345125", roll: "21CSE025", name: "Md Mainur Rahman"},
            { userId: "1649793", roll: "21CSE026", name: "Md. Sadekur Rahman Sahad"},
            { userId: "1335098", roll: "21CSE027", name: "MD.Emon"},
            { userId: "1345277", roll: "21CSE028", name: "Md.Emon Howlader"},
            { userId: "134509", roll: "21CSE029", name: "Md. Ataur Rahman Osman Goni"},
            { userId: "1339110", roll: "21CSE030", name: "Md.Wahidujjaman"},
            { userId: "1334930", roll: "21CSE031", name: "MD.Rony hosen khan"},
            { userId: "823860", roll: "21CSE032", name: "Syfur Rahman"},
            { userId: "1345260", roll: "21CSE034", name: "Md.Miraz Mahmud"},
            { userId: "1650178", roll: "21CSE035", name: "Md. Abdul Karim"},
            { userId: "1337718", roll: "21CSE039", name: "Md Reratul Azime"},
            { userId: "1335296", roll: "21CSE040", name: "Md Faysal Ahamed"},
            { userId: "1281311", roll: "21CSE041", name: "Md Ahad"},
            { userId: "1294490", roll: "21CSE042", name: "Md. Aminul Islam"},
            { userId: "1345154", roll: "21CSE043", name: "Md.Rayhan uddin"},
            { userId: "1649956", roll: "21CSE044", name: "MD.Mosaraf hossen"},
            { userId: "1650132", roll: "21CSE045", name: "Jannatul Ferdous  Mim"},
            { userId: "1649957", roll: "21CSE046", name: "Ramisa Noushin Sohely"},
            { userId: "1649895", roll: "21CSE047", name: "Nazifa Tabassum Chowdhury"},
            { userId: "1336678", roll: "21CSE048", name: "Md.Abu Hossain Mohalder"},
            { userId: "1336716", roll: "21CSE049", name: "Md. Shariful Islam"},
            { userId: "1345015", roll: "21CSE050", name: "Rafiul Goni Rayhan"},
            { userId: "1650100", roll: "21CSE051", name: "Sadia Amrin Laaj"},
            { userId: "1334976", roll: "21CSE052", name: "Sadman Sadid"},
            { userId: "1336811", roll: "21CSE053", name: "Anika Islam Zarin "},
            { userId: "1290974", roll: "20CSE002", name: "S M Samirizzaman" },
            { userId: "1290886", roll: "20CSE044", name: "Abdullah Al Ovi" }
             ];

        const problemIds = ["996","1012","1268","1724","2091","2113","2126","2160","2307","2827","310","3671","3648","1346","1281"];
        const fetchSubmissionCounts = async () => {
            try {
                const counts = await calculateSubmissionCounts(users, problemIds, minSubsId);
                setSubmissionCounts(counts);
            } catch (error) {
                console.error("Error fetching submission counts:", error);
            }
        };

        fetchSubmissionCounts();
    }, []);

    return (
        <div className="w-full">
            <Rank submissionCounts={submissionCounts} />
        </div>
    );
};

export default RankPage;
