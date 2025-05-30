import React, { useRef, useState } from 'react';
import {
  home,
  people,
  building,
  ladder,
  membershipCard,
  waterPoloBall,
  blackArrow,
  twentyMilesIcon,
  fifteenMilesIcon,
  tenMilesIcon,
} from '@/assets';
import CustomCurveButton from '@/components/CustomCurveButton';
import AlertBox from '../../shared/AlertBox';
import GoBackTextButton from '../../shared/GoBackTextButton';
import PoolAddressInput, {
  PoolAddressInputRef,
  Suggestion,
} from './components/PoolAddressInput';
import CardsSelector, { SelectableCard } from './components/CardsSelector';
import SelectCorrectAddress from './components/SelectCorrectAddress';
import { useAddressSuggestions } from './hooks';
import { useRegistrationForm } from '@/context/registration-form.context';
import { isZipCodeValid } from './helpers';
import {
  BuildOnFieldFocusLostHandlerFunction,
} from '../../../types';

type SelectListCard = SelectableCard & { warningMessage?: string };

const poolTypesList: SelectListCard[] = [
  {
    text: 'Home Pool',
    icon: home,
    value: 'Home Pool',
  },
  {
    text: 'Housing Community Pool',
    icon: people,
    value: 'Housing Community Pool',
  },
  {
    text: 'Hotel Pool',
    icon: building,
    value: 'Hotel Pool',
    warningMessage:
      'Remember: Before your lessons begin, check with the hotel pool that lessons are permitted. Any fees required by the hotel pool are separate and not included in your registration with Sunsational.',
  },
  {
    text: 'Public Pool',
    icon: ladder,
    value: 'Public Pool',
    warningMessage:
      'Remember: Before your lessons begin, check with the public pool that lessons are permitted. Any fees required by the public pool are separate and not included with your registration with Sunsational.',
  },
  {
    text: 'Members Only Pool',
    icon: membershipCard,
    value: 'Members Only Pool',
  },
  {
    text: 'Home Pool',
    icon: waterPoloBall,
    value: 'Other Pool',
    warningMessage:
      'Remember: Before your lessons begin, check that lessons are allowed at the pool you plan to use. Any fees required by the facility are separate and not included in your registration with Sunsational.',
  },
];

const maxTravelDistance: SelectListCard[] = [
  {
    text: '20 MILES',
    icon: twentyMilesIcon,
    value: '20 MILES',
  },
  {
    text: '15 MILES',
    icon: fifteenMilesIcon,
    value: '15 MILES',
  },
  {
    text: '10 MILES',
    icon: tenMilesIcon,
    value: '10 MILES',
  },
];

type Props = {
  buildOnFieldFocusLostHandler: BuildOnFieldFocusLostHandlerFunction;
  onNextClicked: () => void;
  onPreviousClicked: () => void;
};

const RegistrationForm6: React.FC<Props> = ({
  onNextClicked,
  onPreviousClicked,
  buildOnFieldFocusLostHandler,
}) => {
  const {
    registrationForm,
    setRegistrationFormField,
    registrationErrors,
    registrationErrorsText,
  } = useRegistrationForm();

  const {
    zip: initialZip,
    poolAddress,
    poolType,
    customerHasAccessToPool,
  } = registrationForm ?? {};

  const setPoolAddress = (value: string) => { setRegistrationFormField('poolAddress', value); };

  const poolAddressInputRef = useRef<PoolAddressInputRef>(null);

  const { foundSuggestions, setFoundSuggestion, requestAddressSuggestions } =
    useAddressSuggestions();
  const [showSuggestionList, setShowSuggestionList] = useState(false);
  const [editSuggestedAddress, setEditSuggestedAddress] = useState({
    suggested: '',
    entered: '',
    showCorrectVariantSelector: false,
    editAccepted: false,
  });
  const userChangeSuggestAddressWithoutAccept =
    !editSuggestedAddress.editAccepted &&
    editSuggestedAddress.suggested !== editSuggestedAddress.entered;

  const [zipDifferentWarning, setZipDifferentWarning] = useState<{
    zip: string;
    show: boolean;
    alreadyShown?: boolean;
  }>({
    zip: '',
    show: false,
    alreadyShown: undefined,
  });

  const [cardsSelectorsValues, setCardsSelectorsValues] = useState<
    Record<string, SelectListCard | undefined>
  >({
    poolType: poolTypesList.find((card) => card.value === poolType),
    maxTravelDistance: undefined,
  });

  const backClickHandler = () => {
    onPreviousClicked();
  };

  const handlePoolAddressChange = (enteredAddress: string) => {
    setPoolAddress(enteredAddress);
    requestAddressSuggestions(enteredAddress);

    if (enteredAddress.length) {
      setShowSuggestionList(true);

      if (editSuggestedAddress.suggested) {
        setEditSuggestedAddress({
          ...editSuggestedAddress,
          entered: enteredAddress,
          showCorrectVariantSelector: false,
        });
      }
    } else {
      setFoundSuggestion([]);
      setEditSuggestedAddress({
        suggested: '',
        entered: '',
        showCorrectVariantSelector: false,
        editAccepted: false,
      });
    }

    if (zipDifferentWarning.show && !zipDifferentWarning.alreadyShown) {
      setZipDifferentWarning({ ...zipDifferentWarning, alreadyShown: true });
    }
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    const zipFromSuggestion = suggestion.text.slice(-5);

    if (isZipCodeValid(zipFromSuggestion)) {
      setRegistrationFormField('zip', zipFromSuggestion);
      compareZipAndZipFromSuggestion(zipFromSuggestion);
    }

    setShowSuggestionList(false);
    setPoolAddress(suggestion.text);
    setEditSuggestedAddress({
      suggested: suggestion.text,
      entered: suggestion.text,
      showCorrectVariantSelector: false,
      editAccepted: false,
    });
  };

  const handleSelectCorrectAddressEditClick = () => {
    setEditSuggestedAddress({
      ...editSuggestedAddress,
      showCorrectVariantSelector: false,
    });
    poolAddressInputRef.current?.focus();
  };
  const handleSelectCorrectAddress = (variant: 'entered' | 'suggested') => {
    setEditSuggestedAddress({
      editAccepted: true,
      entered: '',
      suggested: '',
      showCorrectVariantSelector: false,
    });
    setPoolAddress(
      variant === 'entered'
        ? editSuggestedAddress.entered
        : editSuggestedAddress.suggested
    );
  };

  const handleCardSelectorsChange =
    (key: string) => (cardData?: SelectListCard) => {
      setCardsSelectorsValues({ ...cardsSelectorsValues, [key]: cardData });
    };

  const compareZipAndZipFromSuggestion = (zipFromSuggestion: string) => {
    if (
      !zipDifferentWarning.alreadyShown &&
      isZipCodeValid(zipFromSuggestion) &&
      zipFromSuggestion !== initialZip
    ) {
      setZipDifferentWarning({
        show: true,
        zip: zipFromSuggestion,
      });
    }
  };

  const handleContinueClick = async () => {
    if (userChangeSuggestAddressWithoutAccept) {
      setEditSuggestedAddress({
        ...editSuggestedAddress,
        showCorrectVariantSelector: true,
      });
      return;
    }
    onNextClicked();
  };

  return (
    <div className='flex flex-col gap-[34px]'>
      <GoBackTextButton text='Pool' onClick={backClickHandler} />

      {customerHasAccessToPool && (
        <>
          <PoolAddressInput
            ref={poolAddressInputRef}
            value={poolAddress ?? ''}
            placeholder='123 Street, City, State ZIP'
            error={registrationErrors?.poolAddress}
            onChange={handlePoolAddressChange}
            onBlur={() => {
              buildOnFieldFocusLostHandler('poolAddress');
            }}
            suggestions={foundSuggestions}
            showSuggestions={showSuggestionList}
            onSuggestionClick={handleSuggestionClick}
          />

          <div className='relative'>
            {registrationErrors?.poolType && (
              <div className='absolute top-0 left-0 w-full h-full scale-105 border-[2px] bg-[#f8f2f26d] border-red rounded-lg' />
            )}
            <div className='relative z-1'>
              <p className='font-secondary font-medium mb-4'>Pool type *</p>
              <CardsSelector
                cardsList={poolTypesList}
                radioGroupName='pool_type'
                selectedCard={cardsSelectorsValues.poolType}
                onChange={(card) => {
                  handleCardSelectorsChange('poolType')(card);
                  setRegistrationFormField('poolType', card?.value);
                }}
              />

              {cardsSelectorsValues.poolType?.warningMessage && (
                <div className='mt-4'>
                  <AlertBox
                    type='alert'
                    text={cardsSelectorsValues.poolType.warningMessage}
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {!customerHasAccessToPool && (
        <div className='relative'>
          {/* if we need this selector? */}
          {/* <div className='absolute top-0 left-0 w-full h-full scale-105 border-[2px] bg-[#f8f2f26d] border-red rounded-lg' /> */}
          <div className='relative z-1'>
            <p className='font-secondary font-medium mb-4'>
              Max Distance Willing to Travel *
            </p>
            <CardsSelector
              cardsList={maxTravelDistance}
              radioGroupName='max_travel_distance'
              selectedCard={cardsSelectorsValues.maxTravelDistance}
              onChange={handleCardSelectorsChange('maxTravelDistance')}
            />
          </div>
        </div>
      )}

      {zipDifferentWarning.show && !zipDifferentWarning.alreadyShown && (
        <div>
          <AlertBox
            type='error'
            text={`Address verification has identified the correct zip code for your address is ${zipDifferentWarning.zip}. This zip code is different than the one you provided earlier. Please note, this could affect pricing. Please verify any change in pricing on the next page.`}
          />
        </div>
      )}

      {editSuggestedAddress.showCorrectVariantSelector && (
        <SelectCorrectAddress
          enteredAddress={editSuggestedAddress.entered}
          suggestedAddress={editSuggestedAddress.suggested}
          onEditAddressClick={handleSelectCorrectAddressEditClick}
          onAddressSelect={handleSelectCorrectAddress}
        />
      )}

      {registrationErrorsText && (
        <AlertBox type='error' text={registrationErrorsText} />
      )}

      <div className='flex justify-center'>
        <div className='max-w-[251px] my-auto desktop:max-w-[342px]'>
          <CustomCurveButton
            type='submit'
            text='Continue'
            icon={blackArrow}
            onClick={handleContinueClick}
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <GoBackTextButton
          size='small'
          text='Back to schedule details'
          onClick={backClickHandler}
        />
      </div>
    </div>
  );
};

export default RegistrationForm6;
