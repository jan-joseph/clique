const _text_cleanup = (interests:String):String[] => {
    return interests.split(',').map(string => string.trim())
}

export default _text_cleanup