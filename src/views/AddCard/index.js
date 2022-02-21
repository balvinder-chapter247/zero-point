import React from 'react';
import InnerPageBanner from "../../components/InnerPageBanner";
import Addeditems from './AddedItems'
import PromoInput from './PromoSide';
const AddCard = () => {
    return (
        <>
            <main className="bg-gray-100">
                <InnerPageBanner title={"Add Cart"} />
                <section className='sec-padding'>
                    <div className="container container-small mx-auto px-5 ">
                        <div className="flex  mb-10 box_shadow">
                            {/* selected items will be shown here */}
                            <Addeditems />
                            {/* /////Promo code filter coding starts here */}
                            <PromoInput />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default AddCard