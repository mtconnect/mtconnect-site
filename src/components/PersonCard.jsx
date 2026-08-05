const PersonCard = ({ name, title, org, role, linkedin }) => {
  const content = (
    <>
      {role && (
        <p className="text-[10.5px] font-medium text-brand tracking-[0.06em] uppercase mb-2.5">
          {role}
        </p>
      )}
      <p className="text-[14px] font-medium text-slate-900 mb-1 leading-[1.4]">{name}</p>
      {title && <p className="text-[12.5px] text-slate-500 leading-[1.5]">{title}</p>}
      {org && <p className="text-[12.5px] text-slate-400 leading-[1.5]">{org}</p>}
      {linkedin && (
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-brand mt-3">
          LinkedIn →
        </span>
      )}
    </>
  );

  if (linkedin) {
    return (
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-slate-50 border border-slate-200 hover:border-brand rounded-2xl p-6 no-underline transition-colors"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
      {content}
    </div>
  );
};

export default PersonCard;
