import { useForm } from "react-hook-form";

const SendParcel = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const handleParcelSubmit = data => {
        console.log(data);
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold">Send parcel</h3>
            {/* form */}
            <form onSubmit={handleSubmit(handleParcelSubmit)} className="my-6">
                {/* docuement */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold">Enter Your Parcel Details</h4>
                     <label className="label">
                        <input type="radio" {...register('percelType')} value="document" className="radio" defaultChecked />
                        Document
                    </label>
                     <label className="label ms-4">
                        <input type="radio" {...register('percelType')} value="non-document" className="radio" />
                        Non-Document
                    </label>
                </div>
                {/* parce-info: name and weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
                    </fieldset>
                     <fieldset className="fieldset">
                        <label className="label">Parcel Weight (KG)</label>
                        <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight" />
                    </fieldset>
                </div>
                {/* two column: sender and recevier details */}
                <div>
                    {/* sender info */}
                    <div>
                        sender
                    </div>
                    {/* recever info */}
                    <div>
                        recever
                    </div>
                </div>
                {/* proceed button */}
                <input type="submit" value="Send Parcel" className="btn btn-primary text-black" />
            </form>
        </div>
    );
};

export default SendParcel;