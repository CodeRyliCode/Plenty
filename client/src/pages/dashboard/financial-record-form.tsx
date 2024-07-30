import React, {useState} from "react";
import {useUser} from "@clerk/clerk-react";

export const FinancialRecordForm = () => {
    const [description, setDescription] = useState<string>("")
const [amount, setAmount] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [paymentMethod, setPaymentMethod] = useState<string>("")
console.log('description', description)
    console.log('amount', amount)
    console.log('category', category)
    console.log('paymentMethod', paymentMethod)
const {user} = useUser();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newRecord = {
            userID: user?.id,
            date: new Date(),
            description: description,
            amount: parseFloat(amount),
            category: category,
            paymentMethod: paymentMethod,
        }

        // addRecord(newRecord)
        setDescription("")
        setAmount("")
        setPaymentMethod("")
        setCategory("")
    }
    return (
        <div className="form-container">
            <form>
                <div className="form-field">
                    <label>Description:</label>
                    <input type="text" required className="input" value={description} onChange={(e => setDescription(e.target.value) )} />
                </div>
                <div className="form-field">
                    <label>Amount:</label>
                    <input type="number" required className="input" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div className="form-field">
                    <label>Category:</label>
                    <select required className="input" value={category} onChange={(e) => e.target.value}>
                        <option value="">Select a Category</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Salary">Salary</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-field">
                    <label>Payment Method:</label>
                    <select required className="input" value={paymentMethod} onChange={(e) => e.target.value}>
                        <option value="">Select a Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit" className="button" onSubmit={(event) => handleSubmit(event)}>
                    Add Record
                </button>
            </form>
        </div>
    )
}
