import datetime
import resource
from django import template

register = template.Library()

@register.simple_tag
def debuginfo():
    debugmap = [
 'ru_utime',
'ru_stime',
'ru_maxrss',
'ru_ixrss',
'ru_idrss',
'ru_isrss',
'ru_minflt',
'ru_majflt',
'ru_nswap',
'ru_inblock',
'ru_oublock',
'ru_msgsnd',
'ru_msgrcv',
'ru_nsignals',
'ru_nvcsw',
'ru_nivcsw'
]

    s = '<ul class="list-inline debuginfo-list">'
    for i in debugmap:
        s += '<li>{name}={content}</li>'.format(name=i.split('ru_')[1], content=resource.getrusage(resource.RUSAGE_SELF)[debugmap.index(i)])
    s += '<li>&copy; Carver Harrison</li></ul>'
    return(s)
