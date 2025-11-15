import logo from '../../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="" />
            <h3 className="text-3xl -ms-2 font-bold">Zap<span className='text-[#caeb66]'>Shift</span></h3>
        </div>
    );
};

export default Logo;