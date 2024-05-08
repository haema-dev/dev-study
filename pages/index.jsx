import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Study Community</h1>
            <nav>
                <ul>
                    <li><Link href="/CreateUser">Create User</Link></li>
                    <li><Link href="/JoinStudyGroup">Join Study Group</Link></li>
                    {/*<li><Link href="/CreateStudyGroup">test</Link></li>*/}
                    {/*<li><Link href="/chat">Chat</Link></li>*/}
                </ul>
            </nav>
        </div>
    );
}