export const LARGE_AND_ABOVE = 'largeAndAbove';

const DISPLAY_TYPES = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

const displays = {
    [DISPLAY_TYPES.LARGE]: 1128,
    [DISPLAY_TYPES.MEDIUM]: 744,
    [DISPLAY_TYPES.SMALL]: 327,
};

// 화면해상도 (반응형)
const responsive = {
    [LARGE_AND_ABOVE]: `@media (min-width: ${displays[DISPLAY_TYPES.LARGE]}px)`,
    [DISPLAY_TYPES.SMALL]: `@media (min-width: ${displays[DISPLAY_TYPES.SMALL] - 1}px)`,
    print: `@media print`,
};

export default {
    // 색상
    color: {
        primary: '#03a9f4', // 주 색상
        secondary: '#795548', // 부 색상
        white: '#FFFFFF',
        gray: '#CCCCCC',
        default: '#999999',
    },

    // 글꼴 크기
    size: {
        xg: 24,
        lg: 18,
        md: 14,
        sm: 12,
        xs: 10,
    },

    lineHeight: {
        xg: '60px',
        lg: '54px',
        md: '36px',
        sm: '24px',
        xs: '18px',
    },

    // 길이 단위
    unit: 4,

    // 화면해상도 (반응형)
    responsive,
};
