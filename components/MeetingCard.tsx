import React, { useState } from 'react';
import { UI_TEXTS } from '../constants';
import { Video, Copy, Check, Clock, Users, MapPin } from 'lucide-react';

interface ScheduleItem {
  time: string;
  title: string;
  targetGroup: string;
}

interface MeetingProps {
  data: {
    badge: string;
    location: string;
    url: string;
    meetingId: string;
    passcode: string;
    schedule: ScheduleItem[];
  }
}

export const MeetingCard: React.FC<MeetingProps> = ({ data }) => {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  const copyToClipboard = (text: string, setFn: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setFn(true);
    setTimeout(() => setFn(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Header Section */}
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-brand-600" />
          <h3 className="font-bold text-slate-800">{data.location}</h3>
        </div>
        <span className="px-2.5 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full tracking-wide">
          {data.badge}
        </span>
      </div>

      <div className="p-6">
        {/* Schedule List */}
        <div className="mb-6 space-y-4">
          {data.schedule.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
              <div className="flex items-center gap-2 min-w-[140px] text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.time}</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-800">{item.title}</p>
                <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-0.5">
                  <Users className="w-3 h-3" />
                  <span>{item.targetGroup}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <a 
          href={data.url}
          className="flex items-center justify-center gap-2 w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-brand-600/20 mb-6"
        >
          <Video className="w-5 h-5" />
          {UI_TEXTS.joinButton}
        </a>

        {/* Credentials Footer */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
          {/* Meeting ID */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider pl-1">{UI_TEXTS.idLabel}</span>
            <button 
              onClick={() => copyToClipboard(data.meetingId, setCopiedId)}
              className="flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-left transition-colors group"
            >
              <span className="font-mono text-xs font-medium text-slate-700">{data.meetingId}</span>
              {copiedId ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500" />}
            </button>
          </div>

          {/* Passcode */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider pl-1">{UI_TEXTS.passcodeLabel}</span>
            <button 
              onClick={() => copyToClipboard(data.passcode, setCopiedPass)}
              className="flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-left transition-colors group"
            >
              <span className="font-mono text-xs font-medium text-slate-700">{data.passcode}</span>
              {copiedPass ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};