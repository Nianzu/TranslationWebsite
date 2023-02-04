

// Check if w2 is contained in w1
//
//https://stackoverflow.com/questions/27090069/check-if-a-string-of-type-char-contains-another-string
//
bool contains(char* w1, char* w2)
{
    int i=0;
    int j=0;
    while(w1[i]!='\0'){
        if(w1[i] == w2[j])
        {
            int init = i;
            while (w1[i] == w2[j] && w2[j]!='\0')
            {
                j++;
                i++;
            }
            if(w2[j]=='\0'){
                return true;
            }
            j=0;
        }
        i++;
    }
    return false;
}