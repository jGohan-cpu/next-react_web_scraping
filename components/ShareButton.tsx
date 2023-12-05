"use client"

import React from 'react'
import Image from 'next/image'

const ShareButton = () => {
    return (
        <button
            title="Share link"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            style={{
                transition: 'transform 0.1s ease-in-out',
                width: '40px', // adjust as needed
                height: '40px', // adjust as needed
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.5)'}
            onMouseUp={e => e.currentTarget.style.transform = ''}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
        >
            <div className="p-2 bg-white-200 rounded-10">
                <Image
                    src="/assets/icons/share.svg"
                    alt="share"
                    width={20}
                    height={20}
                />
            </div>
        </button>
    )
}

export default ShareButton