type Props = {
  enteredAddress: string;
  suggestedText: string;
  suggestSelectable?: boolean;
  showWarningText?: boolean;
  onEditAddressClick?: () => void;
  onAddressSelect?: (val: 'entered' | 'suggested') => void;
};

const SelectCorrectAddress: React.FC<Props> = ({
  enteredAddress,
  suggestedText,
  suggestSelectable,
  showWarningText,
  onEditAddressClick,
  onAddressSelect,
}) => {
  return (
    <div className='leading-[1.2]'>
      <p className='mb-2 text-2xl font-medium'>Select an address</p>
      {showWarningText && (
        <p className='text-sm mb-2'>
          We found a more precise version of the address you entered. If it looks right, please use the suggested
          address to make sure we find the best swim instructor for your lessons.
        </p>
      )}
      <div className='grid grid-cols-2 items-start gap-4'>
        <div>
          <div className='font-medium text-lg leading-[1.2]'>Address entered</div>

          <label className='flex items-start gap-2 font-medium mt-2'>
            <input
              className='mt-2'
              type='radio'
              name='select_correct_address'
              onChange={() => onAddressSelect?.('entered')}
            />
            <span className='text-lg'>{enteredAddress}</span>
          </label>

          <button className='text-sm text-darkBlue ml-5' onClick={onEditAddressClick}>
            Edit address
          </button>
        </div>

        <div>
          <div className='font-medium text-lg leading-[1.2]'>Suggested address</div>
          {suggestSelectable ? (
            <label className='flex items-start gap-2 font-medium mt-2'>
              <input
                className='mt-2'
                type='radio'
                name='select_correct_address'
                onChange={() => onAddressSelect?.('suggested')}
              />
              <span className='text-lg'>{suggestedText}</span>
            </label>
          ) : (
            <p className='font-medium mt-2'>{suggestedText}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCorrectAddress;
