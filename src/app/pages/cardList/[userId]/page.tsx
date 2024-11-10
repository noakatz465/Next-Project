import React from 'react'
import CardView from '@/app/components/CardView';



const page = async (props: UserParamsModel) => {
    const { userId } = await props.params

    return (
        <div>
            <CardView userId={Number(userId)} />
        </div>
    )
}

export default page
