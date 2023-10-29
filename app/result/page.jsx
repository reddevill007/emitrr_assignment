import React from 'react'

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/users', {
        cache: 'no-cache'
    });

    if (!res.ok) {
        return;
    }

    return res.json();
}
const ResultPage = async ({ searchParams }) => {
    const { score, cat } = searchParams

    const { users } = await getData();

    users.sort(function (a, b) {
        return b.score - a.score;
    });

    // Get the top 3 highest scorers
    const top3Users = users.slice(0, 3);

    return (
        <div className='mt-16'>
            <h1>You scored {score} in your {cat} quiz</h1>
            <div className='flex w-full justify-center items-center flex-col'>
                <div className='flex items-end'>
                    <div className='w-16 h-20 border bg-blue-400'>{top3Users[1].name}</div>
                    <div className='w-16 h-28 border bg-pink-400'>{top3Users[0].name}</div>
                    <div className='w-16 h-[60px] border bg-green-400'>{top3Users[2].name}</div>
                </div>
                <div>
                    {users.slice(3).map((user, i) => (
                        <div className='flex mb-3 gap-3 border px-3 py-2' key={user.id}>
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