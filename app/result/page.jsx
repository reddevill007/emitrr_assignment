import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const getData = async () => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
        cache: 'no-cache'
    });

    if (!res.ok) {
        return;
    }

    return res.json();
}

const ResultPage = async ({ searchParams }) => {
    const { score, cat } = searchParams
    const { user } = await getServerSession(authOptions);

    const { email } = user

    const { users } = await getData();

    users.sort(function (a, b) {
        return b.score - a.score;
    });

    // Get the top 3 highest scorers
    const top3Users = users.slice(0, 3);
    console.log(email);

    return (
        <div className='mt-16'>
            <h1 className='text-center text-4xl mb-10'>You scored {score} in your {cat} quiz</h1>
            <h2 className='text-center text-4xl mb-10 underline underline-offset-2'>LeaderBoard</h2>
            <div className='flex w-full justify-center items-center flex-col'>
                <div className='flex items-end mb-3'>
                    <div>
                        <p className='w-20 text-sm text-center mb-2 underline underline-offset-2'>{top3Users[1].name}</p>
                        <div className='w-20 h-20 border bg-[#C0C0C0] flex items-center justify-center text-center'>#2 <br />({top3Users[1].score})</div>
                    </div>
                    <div>
                        <p className='w-20 text-sm text-center mb-2 underline underline-offset-2'>{top3Users[0].name}</p>
                        <div className='w-20 h-28 border bg-[#FFD700] flex items-center justify-center text-center'>#1 <br />({top3Users[0].score})</div>
                    </div>
                    <div>
                        <p className='w-20 text-sm text-center mb-2 underline underline-offset-2'>{top3Users[2].name}</p>
                        <div className='w-20 h-[60px] border bg-[#CD7F32] flex items-center justify-center text-center'>#3 <br />({top3Users[2].score})</div>
                    </div>
                </div>
                <div>
                    {users.slice(3).map((user, i) => (
                        <div className={`flex mb-3 gap-3 border rounded-[10px] border-gray-700 px-3 py-2 ${email === user.email ? "bg-blue-300" : "bg-white"}`} key={user.id}>
                            <p># {i + 3}</p>
                            <h2>{user.name}</h2>
                            <p>{user.score}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ResultPage