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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* sender info */}
                     <fieldset className="fieldset">
                        {/* sender name */}
                        <h4 className="text-xl font-semibold">Sender Details</h4>
                        <label className="label">Sender Name</label>
                        <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />
                        {/* wire house */}
                        <label className="label">Sender PickUp Wire House</label>
                        <input type="text" {...register('senderWireHouse')} className="input w-full" placeholder="Sender Wire House" />
                        {/* sender address */}
                        <label className="label">Sender Address</label>
                        <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />
                        {/* sender contact number */}
                        <label className="label">Sender Contact Number</label>
                        <input type="number" {...register('senderContactNumber')} className="input w-full" placeholder="Sender Contact Number" />
                        {/* sender region */}
                        <label className="label">Sender Region</label>
                        <input type="text" {...register('senderRegion')} className="input w-full" placeholder="Sender Region" />
                        {/* picup instruction */}
                        <label className="label">Picup Instructions</label>
                         <textarea {...register('senderPicupInstructions')} className="textarea h-24 w-full" placeholder="Picup Instructions"></textarea>
                    </fieldset>
                    {/* Receiver info */}
                     <fieldset className="fieldset">
                        {/* receiver name */}
                        <h4 className="text-xl font-semibold">Receiver Details</h4>
                        <label className="label">Receiver Name</label>
                        <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />
                        {/* wire house */}
                        <label className="label">Receiver PickUp Wire House</label>
                        <input type="text" {...register('receiverWireHouse')} className="input w-full" placeholder="Receiver Delivery Wire House" />
                        {/* Receiver address */}
                        <label className="label">Receiver Address</label>
                        <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />
                        {/* Receiver contact number */}
                        <label className="label">Receiver Contact Number</label>
                        <input type="number" {...register('receiverContactNumber')} className="input w-full" placeholder="Receiver Contact Number" />
                        {/* Receiver region */}
                        <label className="label">Receiver Region</label>
                        <input type="text" {...register('receiverRegion')} className="input w-full" placeholder="Receiver Region" />
                        {/* picup instruction */}
                        <label className="label">Picup Instructions</label>
                         <textarea {...register('receiverPicupInstructions')} className="textarea h-24 w-full" placeholder="Picup Instructions"></textarea>
                    </fieldset>
                </div>
                {/* proceed button */}
                <input type="submit" value="Send Parcel" className="btn btn-primary w-full text-black my-8" />
            </form>
        </div>
    );
};

export default SendParcel;