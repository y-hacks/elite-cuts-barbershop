import React, { useState } from 'react';
import { Icon } from './Icon';
import { services, timeSlots } from '@/data/services';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

interface BookingData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  comment: string;
}

interface BookingFormProps {
  onSubmit: (data: BookingData) => void;
  onClose?: () => void;
  isModal?: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSubmit, onClose, isModal = false }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    comment: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof BookingData, string>> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^(\+254|0)[17]\d{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid Kenyan phone number';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit(formData);
      setIsSubmitting(false);
    }
  };

  const minDate = new Date().toISOString().split('T')[0];
  const selectedService = services.find(s => s.name === formData.service);

  const inputClasses = cn(
    'w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
    theme === 'dark'
      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
  );

  const labelClasses = cn(
    'block text-sm font-medium mb-2',
    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  );

  const FormContent = (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className={labelClasses}>
          <span className="flex items-center gap-2">
            <Icon name="user" size={16} />
            Full Name *
          </span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={cn(inputClasses, errors.name && 'border-red-500 bg-red-50 dark:bg-red-900/20')}
          placeholder="John Kamau"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={labelClasses}>
          <span className="flex items-center gap-2">
            <Icon name="phone" size={16} />
            Phone Number *
          </span>
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={cn(inputClasses, errors.phone && 'border-red-500 bg-red-50 dark:bg-red-900/20')}
          placeholder="+254 712 345 678"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Email (Optional) */}
      <div>
        <label className={labelClasses}>
          <span className="flex items-center gap-2">
            <Icon name="email" size={16} />
            Email (Optional)
          </span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClasses}
          placeholder="john@example.com"
        />
      </div>

      {/* Service */}
      <div>
        <label className={labelClasses}>
          <span className="flex items-center gap-2">
            <Icon name="scissors" size={16} />
            Select Service *
          </span>
        </label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={cn(inputClasses, errors.service && 'border-red-500')}
        >
          <option value="">Choose a service...</option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name} - KES {service.price.toLocaleString()} ({service.duration})
            </option>
          ))}
        </select>
        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>
            <span className="flex items-center gap-2">
              <Icon name="calendar" size={16} />
              Date *
            </span>
          </label>
          <input
            type="date"
            min={minDate}
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className={cn(inputClasses, errors.date && 'border-red-500')}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>

        <div>
          <label className={labelClasses}>
            <span className="flex items-center gap-2">
              <Icon name="clock" size={16} />
              Time *
            </span>
          </label>
          <select
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className={cn(inputClasses, errors.time && 'border-red-500')}
          >
            <option value="">Select time...</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
        </div>
      </div>

      {/* Comment */}
      <div>
        <label className={labelClasses}>
          <span className="flex items-center gap-2">
            <Icon name="message" size={16} />
            Special Requests (Optional)
          </span>
        </label>
        <textarea
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          className={cn(inputClasses, 'resize-none')}
          rows={3}
          placeholder="Any special requests or preferences..."
        />
      </div>

      {/* Total Preview */}
      {selectedService && (
        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-xl p-4 flex items-center justify-between border border-orange-500/20">
          <div>
            <span className={cn('text-sm', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
              Estimated Total
            </span>
            <p className={cn('text-xs', theme === 'dark' ? 'text-gray-500' : 'text-gray-500')}>
              {selectedService.duration}
            </p>
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            KES {selectedService.price.toLocaleString()}
          </span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Icon name="check" size={20} />
            Confirm Booking
          </>
        )}
      </button>
    </form>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className={cn(
          'w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl',
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        )}>
          <div className={cn(
            'p-6 border-b flex items-center justify-between sticky top-0',
            theme === 'dark' ? 'border-gray-800 bg-gray-900' : 'border-gray-100 bg-white'
          )}>
            <h2 className="text-2xl font-bold">Book Appointment</h2>
            <button
              onClick={onClose}
              className={cn(
                'p-2 rounded-full transition-colors',
                theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              )}
            >
              <Icon name="x" size={20} />
            </button>
          </div>
          <div className="p-6">
            {FormContent}
          </div>
        </div>
      </div>
    );
  }

  return FormContent;
};
