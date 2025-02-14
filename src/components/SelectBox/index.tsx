import React from "react";
import Select, { Props } from "react-select";

const shapes = {
    square: "rounded-[0px]",
} as const;

const sizes = {
    xs: "h-[20px] pr-7 text-[16px]",
} as const;

type selectOptionType = { value: string; label: React.ReactNode };

type SelectProps = Omit<Props, "getOptionLabel"> &
    Partial<{
        className: string;
        options: selectOptionType[];
        isSearchable: boolean;
        isMulti: boolean;
        onChange: (option: any) => void;
        value: string;
        indicator: React.ReactElement;
        getOptionLabel: (e: any) => string;
        children: React.ReactNode;
        shape: keyof typeof shapes;
        size: keyof typeof sizes;
    }>;

const SelectBox = React.forwardRef<any, SelectProps>(
    (
        {
            children,
            className = '',
            options = [],
            isSearchable = false,
            isMulti = false,
            indicator,
            shape,
            size = "xs",
            ...restProps
        },
        ref
    ) => {
        return (
            <>
                <Select
                    ref={ref}
                    options={options}
                    className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]}`}
                    isSearchable={isSearchable}
                    isMulti={isMulti}
                    components={{
                        IndicatorSeparator: () => null,
                        ...(indicator && { DropdownIndicator: () => indicator }),
                    }}
                    styles={{
                        indicatorsContainer: (provided) => ({
                            ...provided,
                            padding: undefined,
                            flexShrink: undefined,
                            width: "max-content",
                            "& > div": { padding: 0 },
                        }),
                        container: (provided) => ({
                            ...provided,
                            zIndex: 0,
                            alignItems: "center",
                        }),
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "0 !important",
                            boxShadow: "none !important",
                            minHeight: "auto",
                            width: "100%",
                            flexWrap: undefined,
                            "&:hover": {
                                border: "0 !important",
                            },
                        }),
                        input: (provided) => ({
                            ...provided,
                            color: "inherit",
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            display: "flex",
                            minWidth: "max-content",
                            width: "100%",
                            backgroundColor: state.isSelected ? "#0061ff" : "transparent",
                            color: state.isSelected ? "#ffffff" : "inherit",
                            "&:hover": {
                                backgroundColor: "#0061ff",
                                color: "#ffffff",
                            },
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            display: "flex",
                            marginLeft: undefined,
                            marginRight: undefined,
                        }),
                        valueContainer: (provided) => ({
                            ...provided,
                            padding: 0,
                            display: "flex",
                            flexWrap: undefined,
                        }),
                        placeholder: (provided) => ({
                            ...provided,
                            margin: 0,
                        }),
                        menuPortal: (base) => ({ ...base, zIndex: 999999 }),
                        menu: (base) => ({
                            ...base,
                            minWidth: "max-content",
                            width: "max-content",
                        }),
                    }}
                    menuPortalTarget={document.body}
                    closeMenuOnScroll={(event: any) => {
                        return event.target.id === "scrollContainer";
                    }}
                    {...restProps}
                />
                {children}
            </>
        );
    }
);

export { SelectBox };