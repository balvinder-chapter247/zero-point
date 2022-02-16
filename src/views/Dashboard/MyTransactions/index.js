import React from 'react'
import TransactionData from '../DataFake/TransactionData'

const MyTransactions = () => {
  return (
    <div>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                        <thead class="bg-white border-b">
                            <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                S.No.
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Name
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Date
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Total Amount
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            TransactionData && TransactionData.length ? 
                            <>
                                {
                                    TransactionData.map((TransactionItem) => 
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {TransactionItem.id}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {TransactionItem.name}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {TransactionItem.date}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {TransactionItem.total_amount}
                                        </td>
                                    </tr>
                                    )
                                }
                            </>
                            :
                            <tr>
                                <td colspan='4'>
                                    <div className='no-transaction text-center pt-12'>
                                        <img src="./images/no-transactions.png" className='w-16 mx-auto pb-2' />
                                        <p>No Transaction made yet.</p>
                                    </div>
                                </td>
                            </tr>
                        }
                            
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyTransactions
